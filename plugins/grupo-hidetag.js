import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import * as fs from 'fs'
let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
try {  
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m || m.text || m.sender
let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: m, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
const isComando1 = /^(hidetag|totag|tag|notify?)$/i.test(command)

case isComando1:
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

} catch {  

/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/  
    
let users = participants.map(u => conn.decodeJid(u.id))
let quoted = m.quoted ? m.quoted : m
let mime = (quoted.msg || quoted).mimetype || ''
let isMedia = /image|video|sticker|audio/.test(mime)
let more = String.fromCharCode(8206)
let masss = more.repeat(850)
let htextos = `${text ? text : "*Hola!!*"}`
if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { image: mediax, mentions: users, caption: htextos, mentions: users }, { quoted: m })
} else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos }, { quoted: m })
} else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { audio: mediax, mentions: users, mimetype: 'audio/mp4', fileName: `Hidetag.mp3` }, { quoted: m })
} else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, {sticker: mediax, mentions: users}, { quoted: m })
} else {
await conn.relayMessage(m.chat, {extendedTextMessage:{text: `${masss}\n${htextos}\n`, ...{ contextInfo: { mentionedJid: users, externalAdReply: { thumbnail: img14, sourceUrl: md }}}}}, {})
}}}
handler.command = /^(hidetag|notificar|notify)$/i
handler.group = true
handler.admin = true
export default handler


/*import * as fs from 'fs' 
 import { generateWAMessageFromContent } from '@whiskeysockets/baileys' 
 let handler = async (m, { conn, text, participants }) => { 
   let users = participants.map(u => conn.decodeJid(u.id)) 
   let quoted = m.quoted ? m.quoted : m 
   let mime = (quoted.msg || quoted).mimetype || '' 
   let isMedia = /image|video|sticker|audio/.test(mime) 
   let redes = ['https://github.com/CuriosityBot-MD1'] 
   let more = String.fromCharCode(8206) 
   let masss = more.repeat(850) 
   let htextos = `${text ? text : "*© CuriosityBot-MD 🚀*"}` 
 if ((isMedia && quoted.mtype === 'imageMessage') && htextos) { 
 var mediax = await quoted.download?.() 
 conn.sendMessage(m.chat, { image: mediax, caption: htextos ,...{contextInfo:{mentionedJid:users,externalAdReply:{thumbnail:fs.readFileSync('./storage/menus/Menu1.jpg'),sourceUrl:redes[Math.floor(Math.random() * redes.length)]}}}}, {quoted: m }) 
 } else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) { 
 var mediax = await quoted.download?.() 
 conn.sendMessage(m.chat, { video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos }) 
 } else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) { 
 var mediax = await quoted.download?.() 
 conn.sendMessage(m.chat, { audio: mediax, ...{ contextInfo: { mentionedJid: users, externalAdReply: { body: htextos, thumbnail: fs.readFileSync('./storage/menus/Menu2.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}}, mimetype: 'audio/mp4', fileName: `Hidetag.mp3` }) 
 } else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) { 
 var mediax = await quoted.download?.() 
 conn.sendMessage(m.chat, {sticker: mediax, ...{ contextInfo: { mentionedJid: users, externalAdReply: { body: htextos, thumbnail: fs.readFileSync('./storage/menus/Menu3.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}} }) 
 } else { 
 await conn.relayMessage(m.chat, {extendedTextMessage:{text: `${masss}\n${htextos}\n`, ...{ contextInfo: { mentionedJid: users, externalAdReply: { thumbnail: fs.readFileSync('./storage/menus/Menu1.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}} 
 }}, {}) 
 } 
 } 
  
 handler.help = ['hidetag'].map(v => v + ' [mensaje]') 
 handler.tags = ['group']
 handler.command = /^(totag|hidetag)$/i 
  
 handler.group = true 
 handler.admin = true 
  
 export default handler*/
