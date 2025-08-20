/* contoh plugins untuk handle ketika ada user yang masuk ke grup
   dan mengirimkan pesan selamat datang

   File: plugins/welcome.ts 
*/

export default {
  name: 'welcome',
  status: false,
  type: 'on', // command, hears, on, callbackQuery
  clue: 'Fungsi: welcome bot ketika ada yang masuk',
  handler: 'message:new_chat_members',
  exec: async function async(ctx) { // gunakan async function, jika error tidak akan crash
    // gunakan await untuk menunggu promise selesai
    // jika tidak menggunakan await, maka jika terjadi error bot tidak akan crash
    // dan akan tetap berjalan
    return await ctx.replyIt(`Welcome ${ctx.from.first_name}!`)
  },
}
