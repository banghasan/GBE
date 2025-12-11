# GeDEBUG Bot Engine for Telegram Bot API
gBE dibuat untuk mempermudah pembuatan bot, dengan dukungan penuh terhadap custom script yang bisa ditulis secara bebas dan fleksibel, sesuai kebutuhan masing-masing pengguna.

![screenshot](https://github.com/banghasan/telegram-bot-api-engine/blob/main/static/ss01.jpg?raw=true)

## Menjalankan

### 1. Download
Download release terbaru 

=> [Release](https://github.com/banghasan/GBE/releases/latest)

Pastikan menyesuaikan file instalasi dengan sistem operasi yang digunakan.

Dan khusus untuk pengguna Linux, jangan lupa memberikan hak eksekusi pada file tersebut, dengan menambahkan izin `+x`

#### Linux
Usai download lakukan perubahan izin akses

```sh
chmod +x gBE_x64
```

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
```

### 3. Jalankan

#### Linux
sesuaikan jika menggunakan x64 atau arm

```bash
$ ./gBE_x64
```

#### Windows

```cmd
gBE.exe
```

atau klik 2x pada file `gBE.exe`

### 4. Selesai

Test Bot nya!

![screenshot](https://github.com/banghasan/telegram-bot-api-engine/blob/main/static/ss02.jpg?raw=true)

![screenshot](https://github.com/banghasan/telegram-bot-api-engine/blob/main/static/ss03.jpg?raw=true)

## Plugins

Untuk mempermudah dalam membuat maupun memodifikasi perintah serta respon bot,
kamu dapat menyisipkan file script pada folder `plugins`

- Penjelasan dapat dilihat pada halaman [plugins](plugins.md)
- Sample bisa dilihat pada [folder plugins](plugins)

##  Default

### tanda perintah

Secara umum, tanda awalan perintah dapat menggunakan salah satu karakter berikut:
`.` , `/`, atau `!`

### command

Berikut adalah daftar perintah bawaan atau built-in commands yang sudah tersedia secara default di dalam bot.

- `versi` perintah untuk mengecek versi bot saat ini
- `/ping` perintah untuk mengecek hidup tidak bot berikut informasi respon time nya
- `/die` perintah untuk mematikan bot (hanya owner)

## Tutorial

### Bagian 1: Menjalankan Bot Telegram dengan GBE

[![Watch the video](https://github.com/banghasan/telegram-bot-api-engine/blob/main/static/gbe1-part1.jpg?raw=true)](https://youtu.be/X-_QemvLDzE)

## Diskusi

Silakan bergabung pada grup telegram [@botIndonesia](https://t.me/botindonesia)
