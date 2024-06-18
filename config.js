const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kousikr35@gmail.com"
global.location="Assam,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+9169007 04276" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+9169007 04276";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_05_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgMjE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV3VzMnVqenRKZHdiVDFhZVJNYStNcUxMdUgwTi9aS2VBbmZITmIxekp4ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTY5MDA3MDQyNzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg2ODY2QjIyQUU2Qzc3MDZBOUQxNEUzNzdBRjhGMjAxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODcxOTUyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxYjBFS1JlMVRvcWxoQmJ2RThFREVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3YTkwZDQ4LWYyNTItNDg5Zi1iMzZhLWQ2MWM1YzRlNWZiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDM0LFxuICAgICAgMTg2LFxuICAgICAgMTIsXG4gICAgICAyNCxcbiAgICAgIDIwLFxuICAgICAgMjA0LFxuICAgICAgMjM5LFxuICAgICAgMjM2LFxuICAgICAgMjM3LFxuICAgICAgMTUwLFxuICAgICAgMSxcbiAgICAgIDI0NSxcbiAgICAgIDE0NSxcbiAgICAgIDE0LFxuICAgICAgMjU0LFxuICAgICAgMjU0LFxuICAgICAgMjI0LFxuICAgICAgMjQ4LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAxNjMsXG4gICAgICAyMjMsXG4gICAgICAxMjgsXG4gICAgICAxMjIsXG4gICAgICAyMTcsXG4gICAgICAyMzksXG4gICAgICAyMTEsXG4gICAgICAyMjEsXG4gICAgICAxMDMsXG4gICAgICAyNTAsXG4gICAgICA1OCxcbiAgICAgIDk5LFxuICAgICAgNjcsXG4gICAgICA2NyxcbiAgICAgIDc4LFxuICAgICAgOTQsXG4gICAgICAxMjMsXG4gICAgICA5OCxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQWExNREwxTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2OTAwNzA0Mjc2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzQxMzE5MjQ1NDM2MDoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKbgeKDn+KLhs2ZzIjwnZWC8J2VhvCdlYzwnZWK8J2VgPCdlYLim4Pig5/ii4bNmcyIIOC/kOC8teC9veKbgeKDn+KLhs2ZzIhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMNit1RUlRb0tqR3N3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBnaEppTnZWYy9iUjF2cDJPMnc3ZWU3VzM2dGRLYnlwZ1h1eitoaXpHUU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUFAwMUE2RmQrb1A0d2FkTjlrUERqYkJ2Z1pJem53UTFpUkM3ZktXRHNYVEw3M2ZaRTZDZkw0clF4YVNnSEU5R2tlU1dxZ1ZWVGpWWTFRcXMySTEvQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUi81bFNuK2kvRkVHbmtkQzlGNFhzWC9RYjZUWHFueFI1bEdod1M1THRIMGFENktmaFYwQmVYMVFmbkxQKytleUdVOUJ5RDh2OGdPdW10Zy9qUFVSRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2OTAwNzA0Mjc2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MTk1MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGY1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZjWi5qc29uIjogIntcImtleURhdGFcIjpcIk82WC81aW5zbzE3M0VyRGt4Z0x0b0ptNTA4K2JHaElKQUYrT1UyNmJITU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5MzM3NTMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=” PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
