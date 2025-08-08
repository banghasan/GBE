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
  type: "command", // pilihan: command, hears, reaction, on, callbackQuery
  clue: "penjelasan tentang plugins", // keterangan
  handler: "start", // bisa text, regex, array, atau sesuai fungsi type
  exec: function (ctx) {
    // respon dari handler
    ctx.reply("isi pesan");
  },
};

```

### Tipe

Tipe plugins yang dapat ditentukan adalah:
- `command` berguna untuk hal simple seperti `/start` dlsb
- `hears` sangat berguna untuk penggunaan regex
- `reaction` untuk menangani pesan reaksi
- `on` untuk menangani filter khusus.
- `callbackQuery` untuk menangani tombol keyboard inline, bot inline, dsb