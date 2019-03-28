var txt=function(){
var hea=document.createElement("h4")
var h1=document.createElement("h1")
var tx1=document.createTextNode("はぐみ")
var tx2=document.createTextNode("生年月日：12月16日")
var tx3=document.createTextNode("身長：151cm")
var tx4=document.createTextNode("血液型：はちみつ型")
var tx5=document.createTextNode("出身地：はぐの森")
var tx6=document.createTextNode("特技：ダンス、バレエ、歌")
var tx7=document.createTextNode("趣味：アイドル、バレエ、歌")
var tx8=document.createTextNode("所属：＠ほぉ〜むカフェドンキ店所属")
var tx9=document.createTextNode("メンバーカラー：黄")

var br1=document.createElement("br")
var br2=document.createElement("br")
var br3=document.createElement("br")
var br4=document.createElement("br")
var br5=document.createElement("br")
var br6=document.createElement("br")

}//txt()

var imf=function(){
var img=document.createElement("img")
img.src="img/hag.jpg"
img.className="img-fluid";
}//imf

var big=function(){
var fig=document.createElement("figure")
var img=document.createElement("img")
img.src="img/hag.jpg"
img.className="img-fluid";

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

var bod=document.createElement("div")
var img=document.createElement("img")
img.src="img/hag.jpg"
img.className="img-fluid";

txt()

h1.appendChild(tx1)

bod.appendChild(img)
bod.appendChild(h1)
bod.appendChild(br1)
bod.appendChild(tx2)
bod.appendChild(br2)
bod.appendChild(tx3)
bod.appendChild(br3)
bod.appendChild(tx4)
bod.appendChild(br4)

document.getElementById("hag").appendChild(bod);
}


if(w>600){big()
}else{sma()
}
