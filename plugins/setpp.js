import { downloadMediaMessage } from '@whiskeysockets/baileys';
import Jimp from 'jimp';
import config from '../config.cjs';

const setProfilePicture = async (m, sock) => {
  const botNumber = await sock.decodeJid(sock.user.id);
  const isBot = m.sender === botNumber;
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd !== "setpp") return;

  if (!isBot) {
    return m.reply("❌ *Seul le bot peut utiliser cette commande.*");
  }

  if (!m.quoted?.message?.imageMessage) {
    return m.reply("⚠️ *Répondez à une image pour la définir comme photo de profil.*");
  }

  await m.React('⏳');

  try {
    let media;
    for (let i = 0; i < 3; i++) {
      try {
        media = await downloadMediaMessage(m.quoted, 'buffer');
        if (media) break;
      } catch {
        if (i === 2) {
          await m.React('❌');
          return m.reply("❌ *Échec du téléchargement de l'image. Réessayez.*");
        }
      }
    }

    let image = await Jimp.read(media);
    if (!image) throw new Error("Image invalide");

    const size = Math.max(image.bitmap.width, image.bitmap.height);
    if (image.bitmap.width !== image.bitmap.height) {
      const squareImage = new Jimp(size, size, 0x000000FF);
      squareImage.composite(image, (size - image.bitmap.width) / 2, (size - image.bitmap.height) / 2);
      image = squareImage; // Important : remplacer l'image par la version carrée
    }

    image.resize(640, 640);
    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);

    await sock.updateProfilePicture(botNumber, buffer);
    await m.React('✅');

    return sock.sendMessage(
      m.from,
      {
        text: `
┌─〔 *PHOTO DE PROFIL MISE À JOUR* 〕─◉
│
│ ✅ *Photo de profil mise à jour avec succès !*
│ 🤖 *Bot:* ${botNumber.split("@")[0]}
│
└─➤ *ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK-DEV*
        `.trim(),
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363422353392657@newsletter',
            newsletterName: "DARK-DEV",
            serverMessageId: 143
          }
        }
      },
      { quoted: m }
    );

  } catch (error) {
    console.error("Erreur photo profil:", error);
    await m.React('❌');
    return m.reply("❌ *Une erreur est survenue lors de la mise à jour de la photo de profil.*");
  }
};

export default setProfilePicture;
