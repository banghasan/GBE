/* contoh plugins untuk handle ketika ada user yang masuk ke grup
   dan mengirimkan pesan selamat datang

   File: plugins/welcome.ts 
*/

export default {
  name: "welcome",
  status: true,
  type: "on", // command, hears, on
  clue: "contoh welcome bot ketika ada yang masuk",
  handler: "message:new_chat_members",
  exec: function async(ctx) {
    ctx.replyIt(`Hai, welcome!`);
  },
};
