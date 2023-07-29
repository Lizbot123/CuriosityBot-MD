import fetch from 'node-fetch';
import axios from 'axios';
import cheerio from 'cheerio';
import instagramGetUrl from 'instagram-url-direct';
import vm from 'node:vm';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `*⚠️ INGRESA UN ENLACE DE INSTAGRAM*\n\n💡 EJEMPLO\n*${usedPrefix + command} https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=*`
  m.reply(`_*🚀 C A R G A N D O*_`);
  try {
    const datTa = await instagram.v1(args[0]);
    if (datTa.error) return m.reply(`${datTa.message}`);
    for (const urRRl of datTa) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${urRRl.url}`)).text();
      const tXXxt = `🔗 *Url:* ${shortUrRRl}`.trim();
      conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
    try {
      const AA = await savefrom(args[0]);
      const shortUrl222 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
      const txt222 = `🔗 *Url:* ${shortUrl222}`.trim();
      await conn.sendFile(m.chat, AA.url[0].url, 'error.mp4', txt222, m);
    } catch {
      console.log('Error en el intento 1');
      try {
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = `🔗 *Url:* ${shortUrl2}`.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
      } catch {
        console.log('Error en el intento 2');
        try {
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${r.medias[i].url}`)).text();
          const txt4 = `🔗 *Url:* ${shortUrl3}`.trim();
          for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
        } catch {
          console.log('Error en el intento 3');
          try {
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = `🔗 *Url:* ${shortUrl1}`.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
          } catch {
            console.log('Error en el intento 4, sin resultados');
            throw `*⚠️ ERROR, NO FUE POSIBLE DESCARGAR SU PEDIDO, VUELVA A INTENTAR*`
          }
        }
      }
    }
  }
};
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;
export default handler;
async function savefrom(urlL) {
  const body = new URLSearchParams({'sf_url': encodeURI(urlL), 'sf_submit': '', 'new': 2, 'lang': 'id', 'app': '', 'country': 'id', 'os': 'Windows', 'browser': 'Chrome', 'channel': ' main', 'sf-nomad': 1});
  let {data} = await axios({'url': 'https://worker.sf-tools.com/savefrom.php', 'method': 'POST', 'data': body, 'headers': {'content-type': 'application/x-www-form-urlencoded', 'origin': 'https://id.savefrom.net', 'referer': 'https://id.savefrom.net/', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'}});
  const exec = '[]["filter"]["constructor"](b).call(a);';
  data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split('.call')[0]}.toString();\nelse (\n${exec.replace(/;/, '')}\n);\n} catch {}`);
  const context = {'scriptResult': '', 'i': 0};
  vm.createContext(context);
  new vm.Script(data).runInContext(context);
  return JSON.parse(context.scriptResult.split('window.parent.sf.videoResult.show(')?.[1].split(');')?.[0]);
}

/*import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper' 
import instagramGetUrl from 'instagram-url-direct'
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
   if (!args[0]) throw `*⚠️ INGRESA UN ENLACE DE INSTAGRAM*\n\n💡 EJEMPLO\n*${usedPrefix + command} https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=*` 
   try { 
     await m.reply('_*🚀 C A R G A N D O*_') 
     const results = await instagramGetUrl(args[0]).url_list[0]
     for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', wm, m) 
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


import instagramGetUrl from 'instagram-url-direct'
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
