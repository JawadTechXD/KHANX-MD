const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA5VU25KiSBD9l3rVGJGrGNERC4iCysUWrxv7UEKBpVyLAsEJ/30Du3t6ImZ3tpenIilOnpN5Mr+DNMMlWqAWjL+DnOAaUtQdaZsjMAZqFYaIgD4IIIVgDHzDUgZzW9T0AhYB72Z1EWxdMb/vxAmq2aLaVHs9EaDM3F7Aow/y6hRj/zeAV2TfzVngwbMjTTDHJ6JdybmNG/cCg/tyxcGJZYvN0t1mL+DRIUJMcBrp+RkliMB4gVoXYvI1+q1pH+dcxAs8X1tbJ7pw9rBuo/K0y+vc2lu9nnZaqGKaXv2v0W/cudauhWQnJIFd+/LmepUyLrSChe/IvdsrEl6lcKB6A+76Rr/EUYoCM0ApxbT9ct1bjXKmOzkKS2QE4tmqbkERsk1111fm0SvEw8RBbOnt3PjwNeJ8zzziucrN9eumcJqNpo/OjDew62LoIL3Z2ofeYmtFq5grfybukg+vXP9P3aFKrsmFQJWRWeKPdu2Nmuc69FPHi81t4FSbvaPB0/U2Y75GfxgGixGV4vnMbqdpWd8bI3819u5uYIlTg0tnGQ0bF7asF33Sh7Qiv2PprG9q7QzC+hIUcjM4SKveOotchguOylFrbK26hztBOlaWjt2eFB0VSkroVHNasYlxuCS2t2uDUmSbS3z0SfN6FBzt9vJUdEWtGYDx8NEHBEW4pARSnKXPmMT1AQzqNfIJos/ygoml6ScXieumtLHN3g+04tvCmFWXHRcZoYqtduVPacUMNi+gD3KS+agsUWDgkmaktVBZwgiVYPzns1OdaIKSjKI5DsAYyCwnMaw8GjKS/Ef57XaGtIR5/i1FFPRBSLLEQmBMSYX64PmDoqmCrKuCqiqSxCgTTZFGQ33KydOhKDLcpJOYvCX1cIJKCpO8UyayEseJI/HxVx+kqKFv/ulUc8M+CDEp6Sat8jiDwYe5Pj5C38+qlK7b1Ne6AyJgzHyGEaU4jcpOWZVC4p9xjbROBxiHMC7Rj0IjgoIPLe/LQ8uCrv8LQ7E9XTNAx70D+qU2Y477tTzx85ogSxInitxIZGVG7C528ccPgh1egCjEcQnGQLNTcVBFM92d+I0VzWaaHilapIBPQR8GfTOAd+ptlveCh4nhDnq6syjYV+uSO7tYvZ1iHDEiFjZORCrMv/wDCBiDPX/Xtkte8S+8vDorKjS3h1mG2Ys7Zy7ZPXkt9/sUT5lGGRKJH03wZHpYrjWubYYSXyt3+TBr5gb0aznR79VMz/HVUZSXLluAauyjn5MdydDDc00nmR2kuXtL5h5uRpIkaRtDVwyZynC65Uwk5ZudeylTe1kIgrI7WGI9G8pFaZj4VOA9L8hixBojAwavnhK9jc5zdOP3lYnfTY2fryFGzw2Uwq6B/926N+Kdw5hH/yeM9532L3tB3bCDWBuJ1Sw/3weD8wQX9OqZohfnK38mHDLbyartJFtIWQUendXzGNIwI0m3+tKAZDgAfUCyqrOsmYbZb5JpimnqUTTtlMewpMrnGPzTZAlvt1yS5QYsz2AM3N1VUDtLt0qerymkH0MFlO6ZLnPw+Bs5tIyz9wcAAA==",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
