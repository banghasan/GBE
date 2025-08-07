# GeDEBUG Bot Engine for Telegram Bot API
Dibuat untuk mempermudah membuat bot dengan custom script secara bebas dan leluasa.

![screenshot](https://github.com/banghasan/telegram-bot-api-engine/blob/main/static/ss01.jpg?raw=true)

## Menjalankan

### 1. Download
Download release terbaru sesuai OS kalian masing-masing.

### 2. Edit .env

- Buka dan edit file `.env`
- Sesuikan isi di dalamnya, terutama Token Bot API nya

contoh:

```
# Bot Token dari @botfather
BOT_TOKEN=1234567890:ABCDE

# ID User untuk Bot Owner
BOT_OWNER=213645987

## VERBOSE
# 0 OFF ; 1 ON ; 2 DETAIL
VERBOSE=1

## WEBHOOK
# true = webhook, false = polling (default)
WEBHOOK=false
WEBHOOK_PORT=3000
# secret random text or anything
WEBHOOK_SECRET="m2B3i06ecZkl"

# path
LOAD=plugins/
```

### 3. Bikin folder `plugins`

Jika belum punya, buatlah folder `plugins` untuk nanti menaruh file-file plugins

Nama folder bebas, bisa disesuaikan dengan isi file `.env`

#### Linux

```sh
$ mkdir plugins
```

Jika ingin membuat _plugins_, silakan cek sample di folder [plugins](plugins)

### 4. Jalankan

#### Linux
sesuaikan jika menggunakan x64 atau arm

```bash
$ ./gBE_x64
```

#### Windows

```cmd
gBE.exe
```

### 4. Selesai

Test Bot nya!

![screenshot](https://github.com/banghasan/telegram-bot-api-engine/blob/main/static/ss02.jpg?raw=true)

## Plugins

Support script yang bisa dibuat sendiri.

Nama file harus diakhiri dengan `.ts`

Format paling sederhana saat ini:

```ts
// harus di export default
export default {
  name: "namaFungsi",
  status: true,  // true atau false, aktifkan atau matikan
  type: "command", // command, hears, on
  clue: "keterangan fungsi", 
  handler: "trigger",
  exec: function async(ctx) { // eksekusi ketika handler di tangkap
    ctx.reply("pesan");
  },
};

```

Contoh realnya bisa dilihat pada folder [plugins](plugins)

##  Default

### tanda perintah

tanda perintah awalan dapat menggunakan salah satu karakter sebagai berikut: `./!`

### command

daftar perintah yang sudah built-in di dalam bot

- `versi` perintah untuk mengecek versi bot saat ini
- `ping` perintah untuk mengecek hidup tidak bot berikut informasi respon time nya
- `die` perintah untuk mematikan bot (ini tidak bisa ditimpa, dijalankan hanya oleh owner yang sudah di set di `.env`)

## Diskusi

Silakan bergabung pada grup telegram [@botIndonesia](https://t.me/botindonesia)
