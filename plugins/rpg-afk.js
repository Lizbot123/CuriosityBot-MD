let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`╭──╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰─┨⃞ 𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠─╯`*「 CURIOSITY-AFK 」 ${conn.getName(m.sender)} 𝙴𝚂𝚃𝙰𝚁𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺), 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝙽*\n\n*—◉ 𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙻𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler