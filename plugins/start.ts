/* contoh plugins untuk handle ketika user mengirimkan pesan /start
   kemudian akan membalas pesan tersebut
   dengan pesan selamat datang
   atau jika user adalah owner bot
   maka akan membalas dengan pesan selamat datang khusus owner
 
   File: plugins/start.ts 
*/

export default {
  name: "start",
  status: true,
  type: "command", // command, hears, on, callbackQuery
  clue: ["Fungsi: Start command bot", "Format:\n <code>/start</code>"],
  handler: "start",
  exec: function (ctx) {
    if (ctx.config.isOwner)
      return ctx.replyItHTML("Welcome, You're my <b>Bos</b>!");
    ctx.replyIt(`😵‍💫 Haiii, selamat datang ${ctx.from.first_name} !`);
  },
};
