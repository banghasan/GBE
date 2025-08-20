/* contoh plugins untuk handle ketika user mengirimkan pesan /start
   kemudian akan membalas pesan tersebut
   dengan pesan selamat datang
   atau jika user adalah owner bot
   maka akan membalas dengan pesan selamat datang khusus owner
 
   File: plugins/start.ts 
*/

export default {
  name: 'start',
  status: true, // status true jika ingin diaktifkan, false jika tidak ingin diaktifkan
  type: 'command', // command, hears, reaction, on, callbackQuery
  clue: ['Fungsi: Start command bot', 'Format:\n <code>/start</code>'],
  handler: 'start',
  exec: async function (ctx) { // gunakan async function, jika error tidak akan crash
    // gunakan await untuk menunggu promise selesai
    // jika tidak menggunakan await, maka jika terjadi error bot tidak akan crash
    // dan akan tetap berjalan
    if (ctx.config.isOwner) {
      return await ctx.replyItHTML("Welcome, You're my <b>Bos</b>!")
    }
    // gunakan await untuk menunggu promise selesai
    return await ctx.replyIt(`😵‍💫 Haiii, selamat datang ${ctx.from.first_name} !`)
  },
}
