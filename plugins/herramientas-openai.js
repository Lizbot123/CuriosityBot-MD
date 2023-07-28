/*-------------------------------------------------------*/
/* [❗]                      [❗]                      [❗] */  
/*                                                       */ 
/*       |- [ ⚠ ] - CREDITOS DEL CODIGO - [ ⚠ ] -|      */
/*     —◉ DESAROLLADO POR OTOSAKA:                       */
/*     ◉ Otosaka (https://github.com/6otosaka9)          */
/*     ◉ Número: wa.me/51993966345                       */
/*                                                       */
/*     —◉ FT:                                            */
/*     ◉ BrunoSobrino (https://github.com/BrunoSobrino)  */
/*                                                       */
/* [❗]                      [❗]                      [❗] */
/*-------------------------------------------------------*/
import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) throw `*⚠️ INGRESA UN TEXTO*\n\n❕ EJEMPLO\n${usedPrefix + command} pasos para crear una pagina web`
m.react('💬')
try {
conn.sendPresenceUpdate('composing', m.chat)  
let jailbreak = await fetch('https://raw.githubusercontent.com/Undefined17/CuriosityBot-MD/main/storage/chat-gpt/uwu-mode.txt').then(v => v.text());
let chgptdb = global.chatgpt.data.users[m.sender];
chgptdb.push({ role: 'user', content: text });
const config = { method: 'post', url: 'https://api.openai.com/v1/chat/completions', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + global.openai_key }, data: JSON.stringify({ 'model': 'gpt-3.5-turbo', 'messages': [{ role: 'system', content: `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}` }, ...chgptdb ]})}
let response = await axios(config);
chgptdb.push({ role: 'assistant', content: response.data.choices[0].message.content }) 
if (response.data.choices[0].message.content == 'error' || response.data.choices[0].message.content == '' || !response.data.choices[0].message.content) return XD //causar error undefined para usar otra api    
m.reply(`${response.data.choices[0].message.content}`.trim())
} catch {
try {
conn.sendPresenceUpdate('composing', m.chat)  
let jailbreak = await fetch('https://raw.githubusercontent.com/Undefined17/CuriosityBot-MD/main/storage/chat-gpt/uwu-mode.txt').then(v => v.text());
var syms = `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}`
const botIA222 = await openaiii.createCompletion({ model: "text-davinci-003", prompt: text, temperature: 0.3, max_tokens: 4097, stop: ["Ai:", "Human:"], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0, })
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD //causar error undefined para usar otra api
m.reply(botIA222.data.choices[0].text.trim())    
} catch {
try {
conn.sendPresenceUpdate('composing', m.chat)    
let jailbreak = await fetch('https://raw.githubusercontent.com/Undefined17/CuriosityBot-MD/main/storage/chat-gpt/uwu-mode.txt').then(v => v.text());
var syms = `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}`
let akuariapi1 = await fetch(`https://api.akuari.my.id/ai/gbard?chat=${text}`)
let akuariapijson1 = await akuariapi1.json(syms)
if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD //causar error undefined para usar otra api 
let akuariapiresult1 = await translate(`${akuariapijson1.respon}`, { to: 'es', autoCorrect: true })
m.reply(`${akuariapiresult1.text}`.trim())         
} catch {
try {
conn.sendPresenceUpdate('composing', m.chat)    
let jailbreak = await fetch('https://raw.githubusercontent.com/Undefined17/CuriosityBot-MD/main/storage/chat-gpt/uwu-mode.txt').then(v => v.text());
var syms = `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}`
let tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`)
let hasill22 = await tioress22.json(syms)
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD //causar error undefined para usar otra api 
let hasill22_result = await translate(`${hasill22.result}`, { to: 'es', autoCorrect: true })  
m.reply(`${hasill22_result.text}`.trim())         
} catch {
try {  
conn.sendPresenceUpdate('composing', m.chat)   
let jailbreak = await fetch('https://raw.githubusercontent.com/Undefined17/CuriosityBot-MD/main/storage/chat-gpt/uwu-mode.txt').then(v => v.text());
var syms = `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}`
const searchString2 = " Indonesia "
const replacementString2 = ' español '
let rres = await fetch(`https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv`)
let jjson = await rres.json(syms)
let hahaha = await translate(`${jjson.data}`, { to: 'es', autoCorrect: true })
let sextS = hahaha.text
let replacedText = sextS.replace(searchString2, replacementString2).trim()
m.reply(replacedText)
} catch {    
try {  
conn.sendPresenceUpdate('composing', m.chat)    
let jailbreak = await fetch('https://raw.githubusercontent.com/Undefined17/CuriosityBot-MD/main/storage/chat-gpt/uwu-mode.txt').then(v => v.text());
var syms = `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}`
let akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`)
let akuariapijson2 = await akuariapi2.json(syms)
if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD //causar error undefined para lanzar msg de error
let akuariapiresult2 = await translate(`${akuariapijson2.respon}`, { to: 'es', autoCorrect: true })
m.reply(akuariapiresult2.text.trim())    
} catch {    
try {   
conn.sendPresenceUpdate('composing', m.chat)    
let jailbreak = await fetch('https://raw.githubusercontent.com/Undefined17/CuriosityBot-MD/main/storage/chat-gpt/uwu-mode.txt').then(v => v.text());
var syms = `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}`
let fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${syms1}&apikey=fg-dylux`)
let fgjson1 = await fgapi1.json(syms)
if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD //causar error undefined para lanzar msg de error
let fgjson1_result = await translate(`${fgjson1.result}`, { to: 'es', autoCorrect: true })  
m.reply(fgjson1_result.text.trim())    
} catch {    
throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`   
}}}}}}}}
handler.help = ['ia <text>']
handler.tags = ['tools']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']
handler.register = true
handler.diamond = true
export default handler
