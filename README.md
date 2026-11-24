# Travel by TIMz

Katalog responsif dalam Bahasa Melayu. Google Sites membenamkan laman GitHub Pages daripada cawangan main. Buka index.html untuk pratonton tempatan, atau jalankan python3 -m http.server.

## Tambah pakej melalui GitHub

1. Muat naik foto sendiri ke folder photos, misalnya bali.webp.
2. Buka packages.js dan klik ikon pensel. Salin contoh objek di bawah ke permulaan senarai, selepas tanda kurung siku pembuka.
3. Isi bandar serta setiap tarikan dalam places. Susun days mengikut hari. Gunakan kod IATA untuk pintu masuk penerbangan.
4. Simpan melalui Commit changes. Semak pakej melalui carian selepas GitHub Pages selesai menerbitkan perubahan. Google Sites menggunakan URL katalog yang sama.

```js
{
  title: "Bali",
  summary: "Masukkan ringkasan sebenar pakej di sini.",
  region: "ASEAN",
  duration: "4H3M",
  image: "photos/bali.webp",
  places: ["Denpasar", "Ubud"],
  days: ["Masukkan jadual hari pertama.", "Masukkan jadual hari kedua."],
  airport: "DPS"
},
```

Pakej asal menggunakan start/end untuk memadankan foto, itinerari dan halaman booklet. Kekalkan nombor itu semasa menyunting pakej asal. Paparan ini tidak menyimpan tempahan atau mengesahkan kekosongan. Harga dan tarikh dalam booklet merujuk edisi Ogos 2026. Pautan rakan perjalanan menjalankan carian luar.

## Cuaca

Tanpa konfigurasi, setiap destinasi membuka cuaca semasa melalui Google. Untuk paparan suhu dalam halaman, tetapkan window.TIMZ_WEATHER_ENDPOINT sebelum partners.js dimuatkan kepada endpoint HTTPS milik anda yang menerima parameter place dan mengembalikan respons Google currentConditions.lookup bersama countryCode dan placeName. Simpan kunci API di pelayan. Butiran baca respons dan atribusi berada dalam partners.js.
