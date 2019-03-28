if(w>600){
var fig=document.createElement("figure")

var img=document.createElement("img")
img.src="img/ayu.jpg"
img.className="img-fluid";

fig.appendChild(img)

var cap=document.createElement("figcaption")
var hea=document.createElement("h4")
var h1=document.createElement("h1")
var tx1=document.createTextNode("あゆ")
var tx2=document.createTextNode("生年月日：3月10日")
var tx3=document.createTextNode("身長：157cm")
var tx4=document.createTextNode("血液型：もちもち型")
var tx5=document.createTextNode("出身地：ダイヤモンドプラネット")
var tx6=document.createTextNode("特技：歌、声量があること")
var tx7=document.createTextNode("趣味：美容、アニメ")
var tx8=document.createTextNode("所属：＠ほぉ〜むカフェ（プレミアムメイド）")
var tx9=document.createTextNode("メンバーカラー：青")

var br1=document.createElement("br")
var br2=document.createElement("br")
var br3=document.createElement("br")
var br4=document.createElement("br")
var br5=document.createElement("br")
var br6=document.createElement("br")

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
cap.appendChild(tx7)
cap.appendChild(br6)
cap.appendChild(tx8)

fig.appendChild(cap)

document.getElementById("ayu").appendChild(fig);
}else{

var img=document.createElement("img")
img.src="img/ayu.jpg"
img.className="img-fluid";
// img.setAttribute("data-toggle", "modal");
// img.setAttribute("data-target", "#ayu");

var bod=document.createElement("div")

var h1=document.createElement("h1")
var tx1=document.createTextNode("あゆ")
var tx2=document.createTextNode("生年月日：3月10日")
var tx3=document.createTextNode("身長：157cm")
var tx4=document.createTextNode("血液型：もちもち型")
var tx5=document.createTextNode("出身地：ダイヤモンドプラネット")
var tx6=document.createTextNode("特技：歌、声量があること")
var tx7=document.createTextNode("趣味：美容、アニメ")
var tx8=document.createTextNode("所属：＠ほぉ〜むカフェ（プレミアムメイド）")
var tx9=document.createTextNode("メンバーカラー：青")

var br1=document.createElement("br")
var br2=document.createElement("br")
var br3=document.createElement("br")
var br4=document.createElement("br")
var br5=document.createElement("br")
var br6=document.createElement("br")

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

document.getElementById("ayu").appendChild(bod);

}
