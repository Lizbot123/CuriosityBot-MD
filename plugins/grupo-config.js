const handler = async (m, {conn, args, usedPrefix, command}) => {
const isClose = {
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')];
if (isClose === undefined) {
throw `*¡⚠️ FORMATO ERRÓNEO ⚠️!*\n\n💡 EJEMPLO:

*○ 🔓 ${usedPrefix + command} abrir*
(Permite que todos hablen) 

*○ 🔒 ${usedPrefix + command} cerrar*
(Permite que solo los admins hablen)

*○ 🔓  ${usedPrefix + command} todos*
(Permite que todos pueden editar el grupo)

*○ 🔓 ${usedPrefix + command} admins*
(Permite que solo los admins puedan editar el grupo)
`.trim()
}
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*✅ CONFIGURADO CORRECTAMENTE*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
