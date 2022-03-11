/* 

1. Total keuntungan => (harga beli - harga jual)  * total terjual
2. total modal => harga  beli * (sisa stock +  total terjual)
3. produk buku terlaris => max number  total terjual
4. penulis buku terlaris => ...
5. persentase keuntungan => untung 10% > harga jual / 100% 

*/

const dataPenjualanNovel = [
	{
		idProduct: "BOOK002421",
		namaProduk: "Pulang - Pergi",
		penulis: "Tere Liye",
		hargaBeli: 60000,
		hargaJual: 86000,
		totalTerjual: 150,
		sisaStok: 17,
	},
	{
		idProduct: "BOOK002351",
		namaProduk: "Selamat Tinggal",
		penulis: "Tere Liye",
		hargaBeli: 75000,
		hargaJual: 103000,
		totalTerjual: 171,
		sisaStok: 20,
	},
	{
		idProduct: "BOOK002941",
		namaProduk: "Garis Waktu",
		penulis: "Fiersa Besari",
		hargaBeli: 67000,
		hargaJual: 99000,
		totalTerjual: 213,
		sisaStok: 5,
	},
	{
		idProduct: "BOOK002941",
		namaProduk: "Laskar Pelangi",
		penulis: "Andrea Hirata",
		hargaBeli: 55000,
		hargaJual: 68000,
		totalTerjual: 20,
		sisaStok: 56,
	},
];

getInfoPenjualan = (dataPenjualanNovel) => {
	{
		var hitungTotalTerjual = dataPenjualanNovel.reduce((dataPenjualanNovel1, Terjual) => {
			var semuaTotalTerjual = dataPenjualanNovel1 + Terjual.totalTerjual;

			return semuaTotalTerjual;
		}); // total terjual

		/* 

		
		*/
	}

	return dataPenjualanNovel;
};

console.log(getInfoPenjualan(dataPenjualanNovel));

/* const hitungTotalPenjualan = dataPenjualanPakAldi.reduce((dataPenjualan, barang) => {
	const hargaTotal = dataPenjualan + barang.totalTerjual;

	return hargaTotal;
}, 0);

*/
