var hea,tx=[]
var abr=[],cap,fig

var txt=function(){
hea=document.createElement("h4")
    //hea.setAttribute("text-align","center")
tx[0]=document.createTextNode("はぐみ")
tx[1]=document.createTextNode("生年月日：12月16日")
tx[2]=document.createTextNode("身長：151cm")
tx[3]=document.createTextNode("血液型：はちみつ型")
tx[4]=document.createTextNode("出身地：はぐの森")
tx[5]=document.createTextNode("特技：歌、ダンス、バレエ、歌")
tx[6]=document.createTextNode("趣味：アイドル、バレエ、歌")
tx[7]=document.createTextNode("所属：＠ほぉ〜むカフェカフェドンキ店")
tx[8]=document.createTextNode("メンバーカラー：黄色")
hea.appendChild(tx[0])
console.log(tx[0])

for(var i=0;i<11;i++){
abr[i]=document.createElement("br")
}

}//txt()

var img=document.createElement("img")

var imgf=function(){
img.src="img/hag.jpg"
img.className="img-fluid";
}//imf

var capf=function(arg){
cap=document.createElement(arg)
cap.appendChild(hea)
    for(var i=1;i<9;i++){
cap.appendChild(tx[i])
cap.appendChild(abr[i])
}

}//capf

var bapp=function(){
fig=document.createElement("figure")
fig.appendChild(img)
imgf()
txt()
capf("figcaption")
fig.appendChild(cap)
document.getElementById("hag").appendChild(fig);

}//app

var sapp=function(){
fig=document.createElement("div")
fig.appendChild(img)

imgf()
txt()
capf("div")
    console.log(cap)
    cap.classList.add("bg-dark")
    cap.classList.add("p-3")
    cap.classList.add("wh")
fig.appendChild(cap)

document.getElementById("hag").appendChild(fig);

}//app
var big=function(){
bapp()
}

var sma=function(){
sapp()

}


if(w>600){big()
}else{sma()
}
