var tetAmLich = new Date("2023-01-22T00:00:00").getTime();
function newYear(){
    let dateNow = new Date().getTime();
    let time = tetAmLich - dateNow;
    let giay = 1000;
    let phut = giay * 60;
    let gio = phut * 60;
    let ngay = gio * 24;
    let d = Math.floor(time / (ngay));
    let h = Math.floor((time % (ngay)) / (gio));
    let m = Math.floor((time % (gio)) / (phut));
    let s = Math.floor((time % (phut)) / (giay));
    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;
}
setInterval(function () {
    newYear()
}, 1000)
