import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `*⚠️ INGRESE EL NOMBRE DE LA CANCIÓN QUE ESTÁ BUSCANDO*\n\n*💡 EJEMPLO*\n*${usedPrefix + command}* Another love`
  m.react(rwait)
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play') {
      additionalText = 'audio 🔊';
    } else if (command === 'play2') {
      additionalText = 'video 🎥';
    }    
    const texto1 = `*◉——⌈🔊 YOUTUBE PLAY 🔊⌋——◉*\n
*∘ 📑 TÍTULO :* ${yt_play[0].title}
*∘ 📆 PUBLICADO :* ${yt_play[0].ago}
*∘ ⏰ DURACIÓN :* ${secondString(yt_play[0].duration.seconds)}
*∘ 👀 VISTAS :*  ${MilesNumber(yt_play[0].views)}
*∘ 👤 *AUTOR :* ${yt_play[0].author.name}
*∘ ⏯️ *CANAL :* ${yt_play[0].author.url}
*∘ 🆔 *ID :* ${yt_play[0].videoId}
*∘ 🪬 *TIPO :* ${yt_play[0].type}
*∘ 📡 URL*  ${yt_play[0].url}\n
∘ *_Enviando ${additionalText}, aguarde un momento．．．_*`.trim();
var pesan = await conn.sendMessage(m.chat, {
    text: texto1,
    contextInfo: {
    externalAdReply: {
    title: "",
    body: "CuriosityBot-MD",
    thumbnailUrl: yt_play[0].thumbnail, 
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}})
 //   conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play') {
      try {
        const formats = await bestFormat(yt_play[0].url, 'audio');
        const dl_url = await getUrlDl(formats.url);
        const buff = await getBuffer(dl_url.download);
        conn.sendMessage(m.chat, {audio: buff, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
      } catch (errors) {
        console.log(errors);
        try {
          const q = '128kbps';
          const v = yt_play[0].url;
          const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
          const dl_url = await yt.audio[q].download();
          const ttl = await yt.title;
          const size = await yt.audio[q].fileSizeH;
          conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: ttl,
    body: "",
    thumbnailUrl: tmb,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: pesan })
         // await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, {mimetype: 'audio/mp4'});
        } catch {
          try {
            const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`);
            const dataRET = await dataRE.json();
            conn.sendMessage(m.chat, {audio: {url: dataRET.mp3[1].url}, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
          } catch {
            try {
              const humanLol = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title}`);
              const humanRET = await humanLol.json();
              conn.sendMessage(m.chat, { audio: { url: humanRET.result.audio.link }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: yt_play[0].title,
    body: "",
    thumbnailUrl: tmb,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: pesan })
            //  conn.sendMessage(m.chat, {audio: {url: humanRET.result.audio.link}, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
            } catch {
              try {
                const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
                const lolh = await lolhuman.json();
                const n = lolh.result.title || 'error';
                conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: n,
    body: "",
    thumbnailUrl: tmb,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: pesan })
               // await conn.sendMessage(m.chat, {audio: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
              } catch {
                try {
                  const searchh = await yts(yt_play[0].url);
                  const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
                  const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
                  const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
                  conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: __res[0].title,
    body: "",
    thumbnailUrl: tmb,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: pesan })
                //  conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
                } catch {
                  await conn.reply(m.chat, '*[⚠️] ERROR AUDIO NO FUE POSIBLE DESCARGAR*', m);
                }
              }
            }
          }
        }
      }
    }
    if (command == 'play2') {
      try {
        const qu = '360';
        const q = qu + 'p';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const ttl = await yt.title;
        const size = await yt.video[q].fileSizeH;
        await await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${ttl}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
      } catch {
        try {
          const mediaa = await ytMp4(yt_play[0].url);
          await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
        } catch {
          try {
            const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
            const lolh = await lolhuman.json();
            const n = lolh.result.title || 'error';
            const n2 = lolh.result.link;
            const n3 = lolh.result.size;
            const n4 = lolh.result.thumbnail;
            await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${n}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${n3}`, thumbnail: await fetch(n4)}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾*', m);
          }
        }
      }
    }
  } catch {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';
  }
};
handler.command = handler.help = ['play','song','youtube','ytmp3','ds','downloadyt','yta'];
handler.tags = ['dl'];
handler.exp = 0;
handler.diamond = true
handler.premium = false;
export default handler

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });

    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};


/*import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
   let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!text) throw `*⚠️ INGRESE EL NOMBRE DE LA CANCIÓN QUE ESTÁ BUSCANDO*\n\n*💡 EJEMPLO*\n*${usedPrefix + command}* Another love`
  m.react(rwait)
  try {
    var vid = (await youtubeSearch(text)).video[0]
    if (!vid) throw '[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾'
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
  *∘ 📑 TÍTULO:*
   ${title}
   
 *∘ 📆 PUBLICADO:* 
  ${publishedTime}
  
  *∘ ⏰ DURACIÓN:* 
  ${durationH}
  
  *∘ 👀 VISTAS* 
  ${viewH}  
  
  *∘ 📡 URL*  
  ${url}
  
  *∘ 💬 DESCRIPCIÓN* 
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
    throw '[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾' 
  }
}
handler.command = handler.help = ['play','song','youtube','ytmp3','ds','downloadyt','yta'];
handler.tags = ['dl'];
handler.exp = 0;
handler.diamond = true
handler.premium = false;
export default handler
async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
  if (!res.ok) throw false
  return await res.text()
}
async function delay(ms) {
   await new Promise(resolve => setTimeout(resolve, ms));
}*/
