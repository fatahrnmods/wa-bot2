/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282177806217', 'RadhinDev', true],
  ['6285946352369']
] // Nomor Owner

global.mods = ['6282177806217'] 
global.prems = ['6282177806217', '6282177321822']

// apikey
global.lann = 'radhindev'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'radhindev'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'RadhinDev' // nama owner
global.nomor = '6282177806217' // nomor owner
global.nans = 'radhinkun.me' // nama bot 
global.thumb = 'https://telegra.ph/file/6564a4a852c98fd10b51b.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'Leviathan-Md┃RadhinDev' 
global.author = '@radhin_al_haady' 
global.fgig = 'https://www.instagram.com/radhin_al_haady' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/radhin123' // bebas tapi jangan kosong
global.fgyt = 'https://radhinkun.me/' // bebas tapi jangan kosong
global.fgpyp = 'https://about.radhinkun.me' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6285880029379'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = 'https://radhinkun.me'
global.email = 'radhinhaady@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ Leviathan corporation'

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})