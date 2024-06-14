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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_59_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZzE5VkdnVGdVRXNMOXl6dEwyeEdkOEZqU2pRb1daUDFDNjAvQ3VyTDVtRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekxMazR5R2ZRMy1yVXZJeVRIUmMyQVwiLFxuICBcInBob25lSWRcIjogXCIxNWNiZmY4Mi0xMTJiLTQ2ZjUtYjQxMi05ZDhlZGI5ZTVjZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgNzksXG4gICAgICAxMDcsXG4gICAgICAxNzEsXG4gICAgICAxNzIsXG4gICAgICA2MyxcbiAgICAgIDYsXG4gICAgICAyMzcsXG4gICAgICAxNDYsXG4gICAgICAzNCxcbiAgICAgIDYsXG4gICAgICAxOTcsXG4gICAgICAyMixcbiAgICAgIDE5NixcbiAgICAgIDE5OCxcbiAgICAgIDEzMixcbiAgICAgIDEzLFxuICAgICAgMTM0LFxuICAgICAgNjUsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxOTcsXG4gICAgICAxNzAsXG4gICAgICAxMSxcbiAgICAgIDEzOSxcbiAgICAgIDIyMSxcbiAgICAgIDExMyxcbiAgICAgIDEwMyxcbiAgICAgIDIwNixcbiAgICAgIDE0NixcbiAgICAgIDYwLFxuICAgICAgMTExLFxuICAgICAgMjI1LFxuICAgICAgMjM3LFxuICAgICAgNjcsXG4gICAgICAxMTEsXG4gICAgICAxMzAsXG4gICAgICAyMjYsXG4gICAgICA5MyxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTENHNlI1VzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc5NTEwMDEzOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTg3NzY2NTMwNDU4MTc6NjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0RMejlZR0VLRGhzTE1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwOWJxckZJQzhlVEtJc0pGWmtSaytWNUFsR2xRVnNvOWFFZDhMZWdGVHdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZwUFQxbHh0SmVZR1E1WE52Y1JKYTFUeDNnbTc2bnVrbnpvWlVOS3dZK2ZicjcyMDEyZVRkUXp4V2tDVXNMZkRWZHptRjRrSGp6L0lEeXpjM041Z0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhFL202NlhORmFqd2ZGRGFFQ0NnWDRnOVhVRU1YSDB3VWVqUmVQbGZDWHV6NHk2VzIxdzVNSzRXeTVNTjZnaHZQWVBjRTZvQmpMTTJtQkhITVJ6RUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc5NTEwMDEzOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3OTUxMDAxMzo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM2NjM3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhCSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEJJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRUtCeUdyZFdlQlo0eE95bHlMUUV2dTJ4Y2N0ZGEwU29ZSmtQM0ZEQTcxdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzkyMjcxODM5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzMzkzNTAwMDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
