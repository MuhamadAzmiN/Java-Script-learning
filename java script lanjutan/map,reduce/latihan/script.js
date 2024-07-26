// ambil semua element vidio
const vidio = Array.from(document.querySelectorAll('[data-duration]'))

// pilih hanya java script lanjutan
let jsLanjutan = vidio.filter(videos => videos.textContent.includes("JAVA SCRIPT LANJUTAN"))

// ambil durasi masing masing vidio
.map(item => item.dataset.duration)
.map(waktu => {
    const parts = waktu.split(":").map(part => parseFloat(part))
    return parts[0] * 60 + parts[1]
})
.reduce((total,detik) => total + detik)

const jam = Math.floor(jsLanjutan / 3600)
jsLanjutan = jsLanjutan - jam * 3600
const menit = Math.floor(jsLanjutan / 60)
const detik = jsLanjutan - menit * 60


// ubah format jadi menit detik


// simpan di dom

const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} jam , ${menit} menit ${detik} detik`
const jmlhVidio = vidio.filter(video => video.textContent.includes('JAVA SCRIPT LANJUTAN')).length
const PjmlVidio = document.querySelector('.jumlah-vidio')
PjmlVidio.textContent = `Jumlah Vidio nya adalah ${jmlhVidio}`


// simpan di dom
console.log(jmlhVidio)