const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255693816272";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255693816272";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_30_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA5MixcbiAgICAgICAgNjksXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyMWwyVkpMRWpQRDdISm1tZm13WmJYQkZCU3ZkZ2lUVEp0dkoxVDFjalVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY5MzgxNjI3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTZBQjc5NzY4QkQyODU0RDZFNjM1QTlFQkZFQUNENTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDgwMjE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFpQkF4UFlJVFY2ZlNLeVlzdFZvREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmQwOTZhNmUtOTNkNS00ZTEzLWIzMmYtNzRiMDZkMWE2OGNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDI0MSxcbiAgICAgIDIwNyxcbiAgICAgIDQ5LFxuICAgICAgMTAzLFxuICAgICAgMTI5LFxuICAgICAgOTUsXG4gICAgICAxNTEsXG4gICAgICAxMzksXG4gICAgICAyMzUsXG4gICAgICAxODYsXG4gICAgICA0MSxcbiAgICAgIDExNixcbiAgICAgIDEyMSxcbiAgICAgIDEwMCxcbiAgICAgIDIzOCxcbiAgICAgIDE0NixcbiAgICAgIDg3LFxuICAgICAgMTUsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAxNjIsXG4gICAgICAxMDQsXG4gICAgICAxMTksXG4gICAgICA3NCxcbiAgICAgIDYsXG4gICAgICA5NixcbiAgICAgIDI1MSxcbiAgICAgIDE3MSxcbiAgICAgIDE0MSxcbiAgICAgIDU4LFxuICAgICAgODcsXG4gICAgICA5LFxuICAgICAgMTg4LFxuICAgICAgNzIsXG4gICAgICAyMzgsXG4gICAgICA0LFxuICAgICAgMTAyLFxuICAgICAgMTA0LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRQQUNUMjlWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2OTM4MTYyNzI6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTI5OTM2NjU4NDM3MzozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT3NvVElRMHBtT3VnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInd3eUtienBvSmNITkdwTmhHV2NYR0tIL1oyZ2JQS0laMG0vTHlodlZIQlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ092N08yb2FoQTh4KzcwUUl0M2JPYmxhNFNKd05jK0F3RGNMS0ZYbk16U2JRa0tVVngvbDJBSm9wb2dWL1U2YnVHM2xZZnp4b0tTQjFLNnVEUkZoQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSkptMHNsV0R2TFI0ajQ0NzY3RXlFeHNZSmp3RjRueENpZGdSWnJtZjUrZk9TcEJkNVFJdEYwY3lsWEh6SEE5b2hDMXc4L093ZUh1SWFCa2R4eHFYQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjkzODE2MjcyOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQ4MDIxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFQMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVAyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRTJUQU85OCsrcGg2ZWNjZ2xOcEtJWDBEV1lCeDdUeDQwZmUxRU82OWJhcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDU0MDM5MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjQ3MzE5MzgxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "MSAZZ7",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
