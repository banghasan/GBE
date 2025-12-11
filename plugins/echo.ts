/* Plugin untuk membuat echo atau pesan berulang
   Ketika user mengetik "/echo halo"
   Bot akan membalas dengan "halo"
   
   File: plugins/echo.ts
*/

export default {
  name: 'echo',
  status: true, // status true jika ingin diaktifkan, false jika tidak ingin diaktifkan
  type: 'command', // command, hears, reaction, on, callbackQuery
  clue: ['Fungsi: Mengulangi pesan yang dikirim'],
  handler: 'echo',
  exec: async function (ctx) {
    // Ambil teks setelah command /echo
    const text = ctx.message?.text || '';
    const echoText = text.replace('/echo', '').trim();
    
    // Jika tidak ada teks yang dikirim, beri tahu user
    if (!echoText) {
      return await ctx.replyIt('❌ Silakan masukkan teks yang ingin di-echo.\n\nContoh: <code>/echo halo</code>', {
        parse_mode: 'HTML'
      });
    }
    
    // Reply dengan teks yang sama
    return await ctx.replyIt(echoText);
  },
}
