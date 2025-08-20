## Plugins

Update saat dibuat dokumentasi plugins ini, release versi `1.00.0 stabil`

### Format

Penamaan dengan ekstensi file `.ts` selain itu akan di skip (dilompati)

```ts
// pengenalan format plugins
// Contoh File: plugins/namaFile.ts 

/*
dapat disisipan code inisiasi
*/

// export dengan default wajib
export default {
  name: "namaPlugins",
  status: true, // true atau false: aktif atau non aktifkan
  type: "command", // pilihan: command, hears, reaction, on, callbackQuery
  clue: "penjelasan tentang plugins", // keterangan, saat ini belum diimplementasikan
  handler: "start", // bisa text, regex, array, atau sesuai fungsi type
  exec: async function (ctx) {
    // gunakan async function, jika error tidak akan crash

    // respon dari handler
    // gunakan await untuk menunggu promise selesai
    // jika menggunakan await, maka jika terjadi error bot tidak akan crash
    // dan akan tetap berjalan
    return await ctx.reply("isi pesan");
  },
};

```

Untuk diingat, selalu gunakanlah `async` dan `await` untuk mencegah bot crash jika terjadi error

### Tipe

Tipe plugins yang dapat ditentukan adalah:
- `command` berguna untuk hal simple seperti `/start` dlsb
- `hears` sangat berguna untuk penggunaan regex
- `reaction` untuk menangani pesan reaksi
- `on` untuk menangani filter khusus.
- `callbackQuery` untuk menangani tombol keyboard inline, bot inline, dsb