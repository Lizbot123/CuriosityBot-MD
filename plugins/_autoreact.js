let handler = async (m, { conn }) => {
let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "👾", "🎃", "👻", "🤡", "🤝", "💪", "👑", "🥶", "😚", "🐱", "🐈", "🐆", "🐅", "💫", "⭐️", "🌟", "✨", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🍭", "🍩", "🍫", "🍧", "🚀", "🚅", "🚄", "🎈", "🪄", "🪅", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "♓️", "♒️", "♑️", "♐️", "♏️", "♎️", "♍️", "♌️", "♋️", "🔯", "🕎", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "✅", "🌝", "😎", "👻", "🔥", "🎁", "🐦"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(md|bot|curiositybot-md|curiobug|curiobug-md|curiobugbot-md|curiositybugbot-md|curiositybugbot|curiositybug|curiosity - bot|curiosity-bot|curiositybot|curiosity|curiositybotmd|curiosity - bot md)/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 

