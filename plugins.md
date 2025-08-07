## Plugins

saat dibuat doc ini, release versi 0.6b

### Format

Penamaan dengan ekstensi file `.ts` selain itu akan di skip (dilompati)

```ts
// pengenalan format plugins

/*
dapat disisipan code inisiasi
*/

// export dengan default wajib
export default {
  name: "namaPlugins",
  status: true, // true atau false: aktif atau non aktifkan
  type: "command", // pilihan: command, hears, on, callbackQuery
  clue: "penjelasan tentang plugins", // keterangan
  handler: "start", // bisa text, regex, array, atau sesuai fungsi type
  exec: function (ctx) {
    // respon dari handler
    ctx.reply("isi pesan");
  },
};

```