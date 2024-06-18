const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_36_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitaTnJJSmNpYmd3anVnMlloWVdpUVZnYjJ1TnI5eDViZ3hMRTAwOXlNWnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NjM1OTg4NjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNjEyMUUzNEM0MkE2MDNGRjU4MDcxRjAyREQ3RENGRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2OTk3ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc2MzU5ODg2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE1MDdFRjc1NDlEMjE4MTA3Qzg4M0VFMEE0RkExNjAxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY5OTc5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFVEF3TTdoX1RJeXpJRUt1dU1TQ2xRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2NDZjMmU1LTVhM2EtNGE5NS1iZDdkLThkNzlkNjUxYjY5MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAyMDgsXG4gICAgICAxNjEsXG4gICAgICAyMDAsXG4gICAgICAxNzQsXG4gICAgICAyNTEsXG4gICAgICAxODgsXG4gICAgICAxNzQsXG4gICAgICA4NCxcbiAgICAgIDIzNSxcbiAgICAgIDE1MixcbiAgICAgIDE5NixcbiAgICAgIDEzNSxcbiAgICAgIDk5LFxuICAgICAgMjEzLFxuICAgICAgMTg4LFxuICAgICAgMTQ0LFxuICAgICAgOTQsXG4gICAgICA5OCxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDExOSxcbiAgICAgIDE4MCxcbiAgICAgIDIxOSxcbiAgICAgIDExLFxuICAgICAgMTEyLFxuICAgICAgMTI4LFxuICAgICAgNzUsXG4gICAgICAxOTQsXG4gICAgICAxNTAsXG4gICAgICAyMyxcbiAgICAgIDIwNSxcbiAgICAgIDEyMixcbiAgICAgIDE5NCxcbiAgICAgIDU3LFxuICAgICAgMjM3LFxuICAgICAgMTk0LFxuICAgICAgMjA0LFxuICAgICAgMTExLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJEMzM2TEZBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc2MzU5ODg2ODM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNtaXRoLCBDb25sZXkgYW5kIENhcnJvbGxcIixcbiAgICBcImxpZFwiOiBcIjE1OTE2NzUxMTgxNDE4NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002Z3JyZ0NFSWVPeGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVUVKa1VSZGI2bTh0dDRyOFo4NEdLOHRGcFlxUTFmRXdUcDUzUzRoeXNoWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoSnhucStrVndOMVdLTE5oWTZ6VHdqNWFrM3V2Qk9oUXpjOTFBTE1Obnlxc056NkwvZWFnaHM5bFIxVXVKNGJxRUM2SHZ0VTJFaFBBTUY0Sm9tQXRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXdjMxZXJrQTVMOXZUZTRsUFJ1N2lmMnNaZWhFWS8yS2dJdVFjVUlJRUhXTEtCZHNUdHJ1dzJGMWRvMkZGNTV6RUhNYWR3RjF1eVRwcUQyem9uQ0NqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc2MzU5ODg2ODM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg2OTk3ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIWHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhYdS5qc29uIjogIntcImtleURhdGFcIjpcInBFUnlqOWFkak8rSzFzZFdDYWo0a01RY2hMdHd6YjVydmVLTmlORVZqazg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU1MDY5MjYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg2OTk3ODgxMjFcIn0iCn0="  // PUT your SESSION_ID 


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
