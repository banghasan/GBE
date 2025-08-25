# GeDEBUG Bot Engine for Telegram Bot API
Dibuat untuk mempermudah membuat bot dengan custom script secara bebas dan leluasa.

![screenshot](https://github.com/banghasan/telegram-bot-api-engine/blob/main/static/ss01.jpg?raw=true)

## Menjalankan

### 1. Download
Download release terbaru 

=> [Release](https://github.com/banghasan/GBE/releases)

Sesuaikan dengan OS yang dipakai.
Jika linux jangan lupa di kasih akses execution (+x).

Misalnya:

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

## Plugins

Untuk memudahkan bisa membuat dan memodifikasi perintah atau respon, dapat disisipkan script file pada folder `plugins` (sesuai seting di `.env`)

- Penjelasan dapat dilihat pada halaman [plugins](plugins.md)
- Sample bisa dilihat pada [folder plugins](plugins)

##  Default

### tanda perintah

tanda perintah awalan secara umum dapat menggunakan salah satu karakter sebagai berikut: `./!`

### command

daftar perintah yang sudah built-in di dalam bot

- `versi` perintah untuk mengecek versi bot saat ini
- `/ping` perintah untuk mengecek hidup tidak bot berikut informasi respon time nya
- `/die` perintah untuk mematikan bot (hanya owner)

## Diskusi

Silakan bergabung pada grup telegram [@botIndonesia](https://t.me/botindonesia)
