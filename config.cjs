//Black-Tappy config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "SPI~XMD~PspBnYxb#WjaUShRBI_dxNZ-P8C0b3dqBGW9sJhV2vwQMkByE0b4",
  PREFIX: process.env.PREFIX || '.',
  BOT_NAME: process.env.BOT_NAME || "𝐒𝐏𝐈𝐑𝐈𝐓𝐘-𝐗𝐌𝐃",
  BOT: process.env.BOT || "YO ✌️",
  NEW_CMD: process.env.NEW_CMD || "ᴀᴅᴅᴠᴀʀ\n│ sᴜᴅᴏ\n| bright",
  CAPTION: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK-DEV",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true,
  ANTI_LEFT: process.env.ANTI_LEFT !== undefined ? process.env.ANTI_LEFT === 'true' : true,
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '👻',
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by DARK-DEV',
  VOICE_CHAT_BOT: process.env.VOICE_CHAT_BOT !== undefined ? process.env.VOICE_CHAT_BOT === 'true' : false,
  ANTILINK: process.env.ANTILINK !== undefined ? process.env.ANTILINK === 'true' : false,
  AUTO_STICKER: process.env.AUTO_STICKER !== undefined ? process.env.AUTO_STICKER === 'true' : false,
  ANTI_LEFT: process.env.ANTI_LEFT !== undefined ? process.env.ANTI_LEFT === 'true' : true,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  CHAT_BOT_MODE: process.env.CHAT_BOT_MODE || "public",
  LYDEA: process.env.LYDEA !== undefined ? process.env.LYDEA === 'true' : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  DELETED_MESSAGES_CHAT_ID: process.env.DELETED_MESSAGES_CHAT_ID || "22603582906@s.whatsapp.net",
  OWNER_NAME: process.env.OWNER_NAME || "Black-Tappy",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "22603582906",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "22603582906",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyBNlOwH-t4npZCdyDv98lyyf8MSbhqG4uE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false,
  ANTIGAYS_ENABLED: process.env.ANTIGAYS_ENABLED !== undefined ? process.env.ANTIGAYS_ENABLED === 'true' : true,


  // New additions for status command
  STATUS: process.env.STATUS !== undefined ? process.env.STATUS === 'true' : false,  // enable/disable status feature
  DEPLOY_DATE: process.env.DEPLOY_DATE || "2025-05-25",                         // deployment date (YYYY-MM-DD)
  TARGET_NUMBER: process.env.TARGET_NUMBER || "22603582906"                    // target phone number for status messages
};

module.exports = config;
