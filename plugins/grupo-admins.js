let handler = async (m, { conn, participants, groupMetadata, args, text }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/menus/Menu2.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`*⚠️ POR FAVOR COLOQUE SU MOTIVO PARA INVOCAR A LOS ADMINS*`)
let mensaje = args.join` `
let yo = `*💬 MENSAJE:* ${text}`
let text = `*• INVOCANDO ADMINS •*

${yo}

*📑 LISTA DE ADMINS:*
• ${listaAdmins}`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
