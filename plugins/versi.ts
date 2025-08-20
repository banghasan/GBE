/* contoh plugins untuk handle ketika user mengirimkan pesan
   untuk mengecek versi bot
   kemudian akan membalas pesan tersebut
   dengan pesan versi bot yang sedang digunakan

   secara default perintah versi sudah ada, sehingga status dibuat menjadi false

   File: plugins/versi.ts  
*/

export default {
  name: 'versi',
  status: false,
  type: 'hears', // command, hears, reaction, on, callbackQuery
  clue: ['Fungsi: cek versi', 'Format:\n <code>.ver</code>'],
  handler: /^[!\/\.]((ver|per)(si|tion)?|about|tentang)?$/i,
  exec: async function async(ctx) { // gunakan async function, jika error tidak akan crash
    // gunakan await untuk menunggu promise selesai
    // jika tidak menggunakan await, maka jika terjadi error bot tidak akan crash
    // dan akan tetap berjalan
    return await ctx.replyIt('Override version!')
  },
}