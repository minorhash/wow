var hea,h1,tx1,tx2,tx3,tx4,tx5,tx6,tx7,tx8,tx9;
var tx1,tx2,tx3,tx4,tx5,tx6,tx7,tx8,tx9;

txt=function(){
hea=document.createElement("h4")
h1=document.createElement("h1")
tx1=document.createTextNode("はぐみ")
tx2=document.createTextNode("生年月日：12月16日")
tx3=document.createTextNode("身長：151cm")
tx4=document.createTextNode("血液型：はちみつ型")
tx5=document.createTextNode("出身地：はぐの森")
tx6=document.createTextNode("特技：ダンス、バレエ、歌")
tx7=document.createTextNode("趣味：アイドル、バレエ、歌")
tx8=document.createTextNode("所属：＠ほぉ〜むカフェドンキ店所属")
tx9=document.createTextNode("メンバーカラー：黄")

var br1=document.createElement("br")
var br2=document.createElement("br")
var br3=document.createElement("br")
var br4=document.createElement("br")
var br5=document.createElement("br")
var br6=document.createElement("br")

}//txt()

var img=document.createElement("img")

var imf=function(){
img.src="img/hag.jpg"
img.className="img-fluid";
}//imf

var big=function(){
var fig=document.createElement("figure")

imf()
txt()

var cap=document.createElement("figcaption")
fig.appendChild(img)
h1.appendChild(tx1)

hea.appendChild(h1)

cap.appendChild(hea)

cap.appendChild(tx2)
cap.appendChild(br1)
cap.appendChild(tx3)
cap.appendChild(br2)
cap.appendChild(tx4)
cap.appendChild(br3)
cap.appendChild(tx5)
cap.appendChild(br4)
cap.appendChild(tx6)
cap.appendChild(br5)

fig.appendChild(cap)

document.getElementById("hag").appendChild(fig);

}

var sma=function(){

var mod=document.createElement("div")

imf()
txt()

h1.appendChild(tx1)

mod.appendChild(img)
mod.appendChild(h1)
mod.appendChild(br1)
mod.appendChild(tx2)
mod.appendChild(br2)
mod.appendChild(tx3)
mod.appendChild(br3)
mod.appendChild(tx4)
mod.appendChild(br4)

document.getElementById("hag").appendChild(mod);
}


if(w>600){big()
}else{sma()
}
