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


global.devs = "+916900704276" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+916900704276";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_22_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICA5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVzZndWdlpnQVZoSnFrS1RyS1d1cXBGNEN3SHpFckE3cHRTZzBpR05iRkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZMZnZIZUtCUVNPd2FOeXQ0ZlhycEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzNhNjdjMGEtNzVmYS00ODkzLWIxMjMtZjllMjdhNzQ2ZThiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTExLFxuICAgICAgMTU4LFxuICAgICAgNTksXG4gICAgICAxNzcsXG4gICAgICAxMzgsXG4gICAgICAxMzAsXG4gICAgICAxNjIsXG4gICAgICAxNTMsXG4gICAgICAxMDQsXG4gICAgICA4MCxcbiAgICAgIDExMixcbiAgICAgIDE2MSxcbiAgICAgIDEsXG4gICAgICA0NyxcbiAgICAgIDEwMyxcbiAgICAgIDExOSxcbiAgICAgIDEwNCxcbiAgICAgIDc1LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDE3MyxcbiAgICAgIDEzOCxcbiAgICAgIDEyLFxuICAgICAgMjA3LFxuICAgICAgMTk3LFxuICAgICAgMTQ3LFxuICAgICAgMjE4LFxuICAgICAgMTY1LFxuICAgICAgMjE3LFxuICAgICAgMTc5LFxuICAgICAgMTAwLFxuICAgICAgMTE5LFxuICAgICAgMTUyLFxuICAgICAgMTEzLFxuICAgICAgMTk1LFxuICAgICAgMTQsXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM3OUo0M0NQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTY5MDA3MDQyNzY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3NDEzMTkyNDU0MzYwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCsrdUVJUXBMREdzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQZ2hKaU52VmMvYlIxdnAyTzJ3N2VlN1czNnRkS2J5cGdYdXoraGl6R1FNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVxakhUaTVLbnEya1dHK0hUOFlvN0ZDelBUdEVQNldPeXIvS3JhZEEvNTFYYm5wQThVWVJBaTE4WksvZVdaMXAxczJCT2Y0ekJzOVJuYXJlK3lobkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImg0V2FqRVhQWkNzM2k4TEVYYjBjRDJhL2pnQTE1aWEwdmdYcG10eEU2V2Z2c1BWaGdla1FDWktzSEdwMm9FdzlMeWdVdkFmTHMzQjFSQ01Tcm8yOENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjkwMDcwNDI3Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzIwNTUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXE2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRQ21odS9SWFd0YU9NUFpDUEJUeFRsYVdPR00yZUdVRXFTaU1HYXJpbWM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzOTMzNzUzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NzIwNTUxOTQxXCJ9Igp9” PUT your SESSION_ID 


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
