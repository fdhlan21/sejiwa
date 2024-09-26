const express = require('express');
const app = express();
const port = 3000;

// Data pasien statis
const dataPasien = [
    {id: 1, namaLengkap: 'Fadhlan Himawan', jenisKelamin: 'Laki-laki', tanggalLahir: '17 Agustus 1945', alamatLengkap: 'Jl. Banda No. 30', diagnosis: 'Sakit Hati'},
    {id: 2, namaLengkap: 'Afrizal Mahasiswa', jenisKelamin: 'Laki-laki', tanggalLahir: '20 Januari 2017', alamatLengkap: 'Jl. Banda No. 30', diagnosis: 'Gagal Ginjal'}
];

// Endpoint untuk mengambil data pasien
app.get('/pasien', (req, res) => {
  res.status(200).json(dataPasien);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
