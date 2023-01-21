//ÖDEV1
let img = document.getElementById('imagine')
function goster(){
    img.src="./acikampul.jpg"
}
function gosterme(){
    img.src = "./kapaliampul.jpg"
}
//ÖDEV1 alternatif
// img.addEventListener('mouseover', function(event){
//     img.setAttribute('src', './acikampul.jpg')
// })
// img.addEventListener('mouseleave', function(event){
//     img.setAttribute('src', './kapaliampul.jpg')
// })
//ÖDEV2
let form = document.getElementById('formSubmit').addEventListener('click', function(event){
    //Varsayılan değerleri görmezden gel
   
    event.preventDefault();
    return kontrol()
});

let users=[]; 

function kontrol(){
  

let paragraf = document.getElementById("paragraf")
let isim = document.getElementById("isim")
let yas= document.getElementById("yas")
let sifre = document.getElementById("sifre")

if(isim.value && sifre.value && yas.value){
    
        users.push({
        name:isim.value,
        age:yas.value,
        password:sifre.value
        })
        paragraf.innerHTML =""
        for (let i = 0; i < users.length; i++) {
       
        paragraf.innerHTML+=`İSMİ:${users[i].name}, YAŞI: ${users[i].age}, ŞİFRESİ: ${users[i].password} <br>`
        
     }   
     console.log(users)
    }
else{
    alert("Herhangi bir yeri boş bıraktınız")
}    
    
}

//ÖDEV3
let aEtkiteki=document.querySelectorAll("a")

function agetir(){
    console.log("2.etiket çalıştırıldı")
}
//ÖDEV4
let dereceleri=[
    {ad:"Ahmet" , derece:12},
    {ad: "Ethem", derece:25},
    {ad: "Eslem", derece:75},
    {ad: "İsmail", derece:95},
    {ad: "Enes", derece:65},
    {ad:"Aykut", derece:35},
    {ad: "Ömer", derece:45},
    {ad: "Tuğçe", derece:70},
    {ad: "Gamze", derece:82},
    {ad: "Gaye", derece:18}
]
let yazdir = document.getElementById("dorduncusoru")


    

let buton = document.getElementById('butonid').addEventListener('click', function(){
   
    for (let i = 0; i < dereceleri.length; i++) {
        
        if(dereceleri[i].derece>50){
            
            yazdir.innerHTML+=`ad:${dereceleri[i].ad},derece:${dereceleri[i].derece}<br>`
        
        }
    }    
});

//ÖDEV5
let baglanti = document.getElementById("baglanti")

window.addEventListener('online', (event) => {
    baglanti.remove();
});
window.addEventListener('offline', (event) => {
    baglanti.innerHTML = "Şuan Çevrimdışısınız"
});

//ÖDEV6
let insanlar = [
    {name:"ismail",cinsiyet:"erkek",age:24},
    {name:"ahmet",cinsiyet:"erkek",age:35},
    {name:"mehmet",cinsiyet:"erkek",age:22},
    {name:"ali",cinsiyet:"erkek",age:44}

]

let found = insanlar.find(function (element) { 
    return element.name =="mehmet" && element.cinsiyet=="erkek" && element.age < 30; 
})

console.log(found)

//ÖDEV7
let meyveler = ["armut","üzüm","kiraz", "erik","muz","kayisi","şeftali","karpuz","kavun","vişne"]

for (isim of meyveler) {
    if (isim == "şeftali" || isim =="karpuz") continue
    if(isim == "vişne") break
    console.log(isim)
    
}

//ÖDEV8
let adgir= document.getElementById("adgir")
let adiniza = document.getElementById("adiniz")
function ismiyazdir() {
    setTimeout(function(){ adiniza.innerHTML += adgir.value }, 5000);
    }

//ÖDEV9
let arrays = [
    { isBanned: true, name: "ismail", level: 10, previousNames: "ismail2", clans: "heko", createdAt: "2018-05-15"},
    { isBanned: false, name: "ahmet", level: 50, previousNames: "", clans: "", createdAt: "2022-06-14"},
    { isBanned: true, name: "ethem", level: 40, previousNames: "ethem2", clans: "kero", createdAt: "2021-07-12"},
    { isBanned: false, name: "enes", level: 30, previousNames: "", clans: "zero", createdAt: "2022-08-11"},
    { isBanned: true, name: "ömer", level: 20, previousNames: "ömer2", clans: "", createdAt: "2019-09-10"}
]    

let gostergitsin = document.getElementById("arrays");

function siralama() {
    gostergitsin.innerHTML =""
    arrays.sort(function(a, b){
      var x = a.level;
      var y = b.level;
      if (x > y) {return -1;}
      if (x < y) {return 1;}
      return 0;
    });
    levelyazdir();
}

function levelyazdir(){
    for (let i = 0; i < arrays.length; i++) {
    gostergitsin.innerHTML += `İSMİ:${arrays[i].name} ,LEVEL:${arrays[i].level} <br>`
    
}
}
function previousyazdir(){
    gostergitsin.innerHTML=""
    for (let i = 0; i < arrays.length; i++) {
    if(arrays[i].previousNames){
        
        gostergitsin.innerHTML += `İSMİ:${arrays[i].name}, PreviousNames:${arrays[i].previousNames} <br>`
    }
}
}

function klanliyazdir(){
    gostergitsin.innerHTML=""
    for (let i = 0; i < arrays.length; i++) {
    if(arrays[i].clans){
        
        gostergitsin.innerHTML += `İSMİ:${arrays[i].name}, Clans:${arrays[i].clans} <br>`
    }
}
}

function yasakliyazdir(){
    gostergitsin.innerHTML=""
    for (let i = 0; i < arrays.length; i++) {
    if(arrays[i].isBanned == true){
        
        gostergitsin.innerHTML += `İSMİ:${arrays[i].name}, Yasaklı:${arrays[i].isBanned} <br>`
    }
}
}

function tarihyazdir(){
    gostergitsin.innerHTML=""
    for (let i = 0; i < arrays.length; i++) {
    if(Number(arrays[i].createdAt.slice(0,4))<2022){
        gostergitsin.innerHTML += `İSMİ:${arrays[i].name}, tarih:${arrays[i].createdAt} <br>`
    }
}

}
