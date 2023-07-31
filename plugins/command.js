import fetch from 'node-fetch' 
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
  // conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg }) 
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

/*import { youtubedl, youtubedlv2, youtubeSearch } from '@bochilteam/scraper' 
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
