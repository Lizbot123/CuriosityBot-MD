global.math = global.math ? global.math : {};
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const mat =`
*CURIOSITY - MATEMÁTICAS*
🧮 Dificultades disponibles :

${Object.keys(modes).join(' | ')}

_Ejemplo : ${usedPrefix+command} normal_
`.trim()
  if (args.length < 1) return await conn.reply(m.chat, mat, m)

  const mode = args[0].toLowerCase();
  if (!(mode in modes)) return await conn.reply(m.chat, mat, m)


  const id = m.chat;
  if (id in global.math) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙾𝙳𝙰𝚅𝙸𝙰 𝙷𝙰𝚈 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰𝚂 𝚂𝙸𝙽 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃!*', global.math[id][0]);
  const math = genMath(mode);
  global.math[id] = [
    await conn.reply(m.chat, `Cuanto es el resultado de *${math.str}*?\n\n*⏰ Tiempo: ${(math.time / 1000).toFixed(2)} segundos*\n*🎁 Gana hasta: ${math.bonus} xp*`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) {
        conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙰𝙷 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙰𝚁𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁*\n\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂 ${math.result}*`, m),
        // conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙰𝙷 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙰𝚁𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁*\n\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂 ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
        delete global.math[id];
      }
    }, math.time),
  ];
};
handler.help = ['math <mode>'];
handler.tags = ['game'];
handler.command = /^math|mates|matemáticas/i;
export default handler;

const modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
};

const operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
};

function genMath(mode) {
  const [a1, a2, b1, b2, ops, time, bonus] = modes[mode];
  let a = randomInt(a1, a2);
  const b = randomInt(b1, b2);
  const op = pickRandom([...ops]);
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))();
  if (op == '/') [a, result] = [result, a];
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
  };
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  from = Math.floor(from);
  to = Math.floor(to);
  return Math.floor((to - from) * Math.random() + from);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/*let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.math = conn.math ? conn.math : {}
    m.react('') 
    if (args.length < 1) throw `
*CURIOSITY - MATEMÁTICAS*
🧮 Dificultades disponibles : 

${Object.keys(modes).join(' | ')} 

_Ejemplo : ${usedPrefix+command} normal_    
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
*CURIOSITY - MATEMÁTICAS*
🧮 Dificultades disponibles : 
  
${Object.keys(modes).join(' | ')} 

_Ejemplo : ${usedPrefix+command} normal_
`.trim()
    
  let id = m.chat
    if (id in conn.math) return conn.reply(m.chat, '*⚠️ Todavía hay preguntas sin respuesta en este chat*', conn.math[id][0])
    let math = genMath(mode)
    conn.math[id] = [
        await conn.reply(m.chat, `• CUANTO ES *${math.str}*=\n\n_Tiempo:_ ${(math.time / 1000).toFixed(2)} segundos\n\n*🎁 Recompensa : ${math.bonus} XP*`, m),
        math, 4,
        setTimeout(() => {
            if (conn.math[id]) conn.reply(m.chat, `⏳ Se acabó el tiempo!\nLa respuesta es : *${math.result}*`, conn.math[id][0])
      delete conn.math[id]
        }, math.time)
    ]
}
handler.help = ['Mates <modo>']
handler.tags = ['game']
handler.command = ['mates', 'mate', 'matemáticas', 'math'] 
handler.register = true

let modes = {
    noob: [-3, 3,-3, 3, '+-', 15000, 10],
  fácil: [-10, 10, -10, 10, '+-', 20000, 40],
  normal: [-40, 40, -20, 20, '+-', 40000, 150],
  difícil: [-100, 100, -70, 70, '+-', 60000, 350],
  extremo: [-999999, 999999, -999999, 999999, '', 99999, 9999],
  imposible: [-99999999999, 99999999999, -99999999999, 999999999999, '/', 30000, 35000],
  imposible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
}

function genMath(mode) {
    let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
    let a = randomInt(a1, a2)
    let b = randomInt(b1, b2)
    let op = pickRandom([...ops])
    let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
    if (op == '/') [a, result] = [result, a]
    return {
        str: `${a} ${operators[op]} ${b}`,
        mode,
        time,
        bonus,
        result
    }
}

function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

handler.modes = modes

export default handler*/
