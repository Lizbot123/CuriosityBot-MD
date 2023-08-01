resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

/*import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `*⚠️ INGRESE EL NOMBRE DE LA CANCIÓN QUE ESTÁ BUSCANDO*\n\n*💡 EJEMPLO*\n*${usedPrefix + command}* Another love`
m.react(rwait)
try {
var vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*⚠️ ERROR, NO FUE POSIBLE DESCARGAR EL AUDIO*'
var { title, 
description, 
thumbnail, 
videoId, 
durationH, 
durationS,
viewH,
publishedTime
} = vid
var url = 'https://www.youtube.com/watch?v=' + videoId

let vide = `https://yt.btch.bz/download?URL=${url}&videoName=video`

let web = `https://yt.btch.bz/downloadAudio?URL=${url}&videoName=video`
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${title}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
var tmb = thumbnail
var captionvid = `
*• 📑 TÍTULO:*
${title}
   
*• 📆 PUBLICADO:* 
${publishedTime}
  
*• ⏰ DURACIÓN:* 
${durationH}
  
*• 👀 VISTAS* 
${viewH}  
  
*• 📡 URL*  
${url}
  
*• 💬 DESCRIPCIÓN* 
${description}`
var pesan = await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: "",
body: "CuriosityBot-MD",
thumbnailUrl: tmb ,
sourceUrl: web,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})

if (durationS > 18000) return conn.sendMessage(m.chat, { text: `*LINK:* ${await cut(url)}\n\n_Durasi terlalu panjang..._\n*Duration Limit!*` }, { quoted: pesan })
m.react(done)
conn.sendMessage(m.chat, { audio: { url: lolh.result.audio.link }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: title,
body: "",
thumbnailUrl: tmb,
sourceUrl: web,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: pesan })

} catch (e) {
throw '*⚠️ NO FUE POSIBLE DESCARGAR EL AUDIO. CORROBORÉ QUE EL NOMBRE DEL VIDEO SEA CORRECTO*' 
}
}
handler.command = handler.help = ['play','song','youtube','ytmp3','ds','downloadyt','yta']
handler.tags = ['dl']
handler.exp = 0
handler.diamond = true
handler.premium = false
export default handler
async function cut(url) {
url = encodeURIComponent(url)
let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
if (!res.ok) throw false
return await res.text()
}
async function delay(ms) {
await new Promise(resolve => setTimeout(resolve, ms))
}*/
