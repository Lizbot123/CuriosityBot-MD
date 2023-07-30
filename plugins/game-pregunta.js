let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ INGRESE UN TEXTO A PREGUNTAR*\n\n💡 EJEMPLO:\n\n *${usedPrefix + command}* Hoy va llover?`
m.react('🤔') 
m.reply(`👀 P R E G U N T A S 👀  
*Pregunta:* ${text}
*Respuesta:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible', 'No sabría decirte'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
handler.help = ['pregunta <texto>?']
handler.tags = ['game']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
