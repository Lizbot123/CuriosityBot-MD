import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper' 
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
   if (!args[0]) throw `*⚠️ INGRESA UN ENLACE DE INSTAGRAM*\n\n💡 EJEMPLO\n*${usedPrefix + command} https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=*` 
   try { 
     await m.reply('_*🚀 C A R G A N D O*_') 
     const results = await instagramdl(args[0]) 
       .catch(async _ => await instagramdlv2(args[0])) 
       .catch(async _ => await instagramdlv3(args[0])) 
       .catch(async _ => await instagramdlv4(args[0])) 
     for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', global.wm, m) 
   } catch (e) { 
     console.log(e) 
     m.reply(`*⚠️ ERROR, NO FUE POSIBLE DESCARGAR SU PEDIDO*`) 
   } 
 } 
  
 handler.help = ['ig'].map(v => v + ' <url>') 
 handler.tags = ['downloader'] 
  
 handler.command = ^(Instagram|ig|igdl)$/i
 handler.limit = true 
 handler.register = true 
  
 export default handler


/*import instagramGetUrl from 'instagram-url-direct'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `·˚ ༘₊· ͟͟͞͞꒰➳ 𝚄𝚜𝚘 𝚍𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘: *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)
    m.reply('Calmao 😎\n*Estoy descargando tu post 🔄*\n\nAguarde un momento, por favor')
    const results = (await instagramGetUrl(args[0])).url_list[0]

    conn.sendFile(m.chat, results, 'ig.mp4', `*Instagram Downloader*`, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['dl']

handler.command = /^(Instagram|ig|igdl)$/i
handler.diamond = true
export default handler*/
