import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '917002015750', process.env.OWNER_NAME || 'ᯓ ᡣ𐭩 𝞓𝙎⚛️', true],
  ['917002015750', 'ᯓ ᡣ𐭩 𝞓𝙎⚛️', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '𝑆𝛩𝛻𝛪𝛯𝑇 𝛥𝛥𝛮𝛪'
global.botname = process.env.BOT_NAME || '𝑆𝛩𝛻𝛪𝛯𝑇 𝛥𝛥𝛮𝛪'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || '𝑆𝛩𝛻𝛪𝛯𝑇 𝛥𝛥𝛮𝛪🌙'
global.stkowner = process.env.OWNER_NAME || 'ᯓ ᡣ𐭩 𝞓𝙎⚛️     ╰┈➤+𝟗𝟏𝟕𝟎𝟎𝟐𝟎𝟏𝟓𝟕𝟓𝟎                𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑴𝑨𝑫𝑬 𝑩𝒀 𝑩𝑶𝑻🎀'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by OREO-BOT'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
