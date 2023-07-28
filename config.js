import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import moment from 'moment-timezone' 
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

global.owner = [
['59894808483', 'Creador 🎨', true],
['5214531106422'], ['593968585383'], ['5492266613038'], ['5492266466080'],
['50258115623'], ['573106040746']]  

global.animxscans = [['56962237366']]
global.suittag = ['59894808483'] 
global.mods = [] 
global.prems = []
  

// IMAGENES 
global.raiz = './'
global.aniD = 'ANI_MX_SCANS/'
global.dirP = raiz//+aniD
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.imagen1 = fs.readFileSync(join(dirP,`storage/menus/Menu1.jpg`))
global.imagen2 = fs.readFileSync(join(dirP,`src/nuevobot.jpg`)) 
global.imagen3 = fs.readFileSync(join(dirP,`src/Pre Bot Publi.png`))
global.imagen4 = fs.readFileSync(join(dirP,`storage/menus/Menu2.jpg`))
global.stickerAMX = fs.readFileSync(join(dirP,`src/Curiosity.webp`))
global.imagen5 = fs.readFileSync('./storage/menus/Menu1.jpg')
global.imagen6 = fs.readFileSync('./storage/menus/Menu2.jpg')
global.imagen7 = fs.readFileSync('./storage/menus/Menu3.jpg')
global.imagen8 = fs.readFileSync('./storage/menus/Menu4.jpg')
global.img = 'https://telegra.ph/file/76816166bd79aa848848d.jpg'

//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'CuriosityBot-MD.js'
global.author = '@1.0.2'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

//⊱ ━━━━━.⋅ Enlaces ⋅.━━━━ ⊰

global.wm2 = '⎙ 𝙲𝚞𝚛𝚒𝚘𝚜𝚒𝚝𝚢'
global.wm3 = '' 
global.wm4 = '『 CuriosityBot-MD 』'
global.azami = 'ᬳ⿻⃯🍓͜͡𝑨⃮𝒛ͦ𝒂͎ᷫ𝒎ͨ𝒊⃯ᮭᬳ'
global.cb = 'CuriosityBot-MD'
global.wait = '*_⌛ C A R G A N D O ▬▬▬▭_*'
global.vs = '1.0.2'
global.fsizedoc = '99999999999999'
global.yt = 'https://www.youtube.com/@Azami_YT'
global.ig = 'https://instagram.com/azami.19'
global.md = 'https://github.com/Undefined17/CuriosityBot-MD'
global.nn = 'https://chat.whatsapp.com/LCAUbkf5kUz7jSxO6FADMU' //Grupo ofc
global.nnn = 'https://chat.whatsapp.com/J1R402WH1N0Hdl3S0NDEYu' //Curiosity global
global.nnnn = 'https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO' //colaboración multi bots
global.nnnnn = 'https://chat.whatsapp.com/KlRcEfl8snBEEOA0JXzw5A' //enlace curiosity
global.nna2 = 'J1R402WH1N0Hdl3S0NDEYu' 
global.paypal = 'https://paypal.me/Azami19'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
