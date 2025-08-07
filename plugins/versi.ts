/* contoh plugins untuk handle ketika user mengirimkan pesan
   untuk mengecek versi bot
   kemudian akan membalas pesan tersebut
   dengan pesan versi bot yang sedang digunakan

   secara default perintah versi sudah ada, sehingga status dibuat menjadi false

   File: plugins/versi.ts  
*/

export default {
  name: "versi",
  status: false,
  type: "hears", // command, hears, on
  clue: ["Fungsi: cek versi", "Format:\n <code>.ver</code>"], 
  handler: /^[!\/\.]((ver|per)(si|tion)?|about|tentang)?$/i, // command untuk handle: ver, versi, persi, version, about, tentang
  exec: function async(ctx) {
    ctx.replyIt("Override version!");
  },
};