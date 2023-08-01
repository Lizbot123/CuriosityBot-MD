import {sticker} from "../lib/sticker.js";
import uploadFile from "../lib/uploadFile.js";
import uploadImage from "../lib/uploadImage.js";
import {webp2png} from "../lib/webp2mp4.js";

let handler = async (m, {conn, args, usedPrefix, command}) => {
  let stiker = false;
  let username = conn.getName(m.sender);
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply("⚠️ *_Máximo 10 segundos._*");
      let img = await q.download?.();
      if (!img)
        throw `[❕] RESPONDE A UN VIDEO, IMAGEN O INSERTE EL ENLACE DE UNA IMAGEN CON TERMINACIÓN  .jpg EL CUAL SERA CONVERTIDO  EN STICKER, DEBE RESPONDER O USAR EL COMANDO ${
          usedPrefix + command
        }*`;
      let out;
      try {
        stiker = await sticker(img, false, global.packname, global.author);
      } catch (e) {
        console.error(e);
      } finally {
        await m.reply(wait);
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img);
          else if (/image/g.test(mime)) out = await uploadImage(img);
          else if (/video/g.test(mime)) out = await uploadFile(img);
          if (typeof out !== "string") out = await uploadImage(img);
          stiker = await sticker(false, out, global.packname, global.author);
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author);
      else return m.reply("URL invalido");
    }
  } catch (e) {
    console.error(e);
    if (!stiker) stiker = e;
  } finally {
    if (stiker)
      conn.sendFile(
        m.chat,
        stiker,
        "sticker.webp",
        "",
        m,
        true,
        {
          contextInfo: {
            forwardingScore: 200,
            isForwarded: false,
            externalAdReply: {showAdAttribution: false, title: wm3, body: `h`, mediaType: 2, sourceUrl: md, thumbnail: imagen3},
          },
        },
        {quoted: m}
      );
    else
      throw "*[❕] LO SIENTO, OCURRIO UN ERROR , VUELVA A INTENTARLO. NO OLVIDE RESPONDER A UN VIDEO, IMAGEN O INSERTE EL ENLACE DE UNA IMAGEN TERMINACIÓN  .jpg EL CUAL SERA CONVERTIDO EN STICKER.*";
  }
};
handler.help = ["sticker"];
handler.tags = ["sticker"];
handler.command = ["s", "sticker", "stiker"];

export default handler;

const isUrl = (text) => {
  return text.match(
    new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, "gi")
  );
};

/*import fetch from 'node-fetch' 
 import { youtubeSearch } from '@bochilteam/scraper' 
  
 let handler = async (m, { conn, text, usedPrefix }) => { 
   if (!text) throw 'Input Query' 
   let vid = (await youtubeSearch(text)).video[0] 
   if (!vid) throw 'Video/Audio Tidak Ditemukan' 
   let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid 
   let url = 'https://www.youtube.com/watch?v=' + videoId 
   let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg` 
   let capt = `*Title:* ${title}\n*Published:* ${publishedTime}\n*Duration:* ${durationH}\n*Views:* ${viewH}\n*Url:* ${url}` 
   let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}ytv ${url}` }] 
   let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_Audio on progress..._', quoted: m }) 
   if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg }) 
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg }) 
 } 
 handler.help = handler.alias = ['play'] 
 handler.tags = ['downloader'] 
 handler.command = /^(pla)$/i 
 handler.exp = 0 
  
 export default handler 
  
 async function shortUrl(url) { 
   url = encodeURIComponent(url) 
   let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`) 
   if (!res.ok) throw false 
   return await res.text() 
 }

import { youtubedl, youtubedlv2, youtubeSearch } from '@bochilteam/scraper' 
 var handler = async (m, { conn, command, text, usedPrefix }) => { 
   if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird` 
   let search = await youtubeSearch(text) 
   let vid = await search.video[0] 
   if (!search) throw 'Video Not Found, Try Another Title' 
   let { authorName, title, thumbnail, duration, viewH, publishedTime, url } = vid 
   if (!vid) throw 'Hasil Tidak Ditemukan' 
   let caption = `╭──── 〔 Y O U T U B E 〕 ─⬣ 
 ⬡ Judul: ${title} 
 ⬡ Author: ${authorName} 
 ⬡ Durasi: ${duration} 
 ⬡ Views: ${viewH} 
 ⬡ Upload: ${publishedTime} 
 ⬡ Link: ${url} 
 ╰────────⬣` 
  conn.reply(m.chat, caption, m, { contextInfo: { externalAdReply: { showAdAttribution: true, mediaType: 2, mediaUrl: sig, body: wm, thumbnail: await(await conn.getFile(thumbnail)).data, sourceUrl: url}}})  
  
   //let buttons = [{ buttonText: { displayText: 'VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }] 
  //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m }) 
  
   const yt = await youtubedl(url).catch(async _ => await youtubedlv2(url)) 
 const link = await yt.audio['128kbps'].download() 
   let doc = {  
   audio:  
   {  
     url: link  
 },  
 mimetype: 'audio/mp4', fileName: `${title}`} 
  
   return conn.sendMessage(m.chat, doc, { quoted: m }) 
         // return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m}) 
         // return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true }) 
 } 
 handler.help = ['play'].map(v => v + ' <pencarian>') 
 handler.tags = ['downloader'] 
 handler.command = /^prueba$/i 
  
 handler.exp = 0 
 handler.limit = true 
  
 export default handler*/
