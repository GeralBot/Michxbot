let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join`  `
let oi = `《 @𝐱.𝐦𝐢𝐜𝐡𝐛𝐦.𝐱 》: ${pesan}`
let teks = ` Bot creado por Wa.me/51935763050 prohibo la venta del bot
《𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐁𝐨𝐭𝐬 - 𝐌𝐢𝐜𝐡𝐱 𝐁𝐨𝐭》\n\n❏ ${oi}\n\n❏ 《 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 》:\n`
for (let mem of participants) {
teks += `✼🌙⭐  @${mem.id.split('@')[0]}\n`}
teks += `➥ 𝐌𝐢𝐜𝐡𝐱 𝐁𝐨𝐭 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    
