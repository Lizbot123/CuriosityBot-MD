import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*⚠️ INGRESE UN TEXTO*\n\n❕ EJEMPLO\n*${usedPrefix + command} Minecraft*`
  m.react('⏰')
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
📍 *Resultado de:* ${text}
🔎 *Buscado en:* Pinterest

_© 2023 Curiosity_`.trim(), fliveLoc, m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['dl']
handler.command = /^(pinterest)$/i

export default handler
