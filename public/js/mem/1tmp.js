var hea,tx=[]
var abr=[],cap,fig

var txt=function(){
hea=document.createElement("h4")
    //hea.setAttribute("text-align","center")
tx[0]=document.createTextNode("あゆ")
tx[1]=document.createTextNode("生年月日：3月10日")
tx[2]=document.createTextNode("身長：157cm")
tx[3]=document.createTextNode("出身地：ダイヤモンドプラネット")
tx[4]=document.createTextNode("特技：歌、声量があること")
tx[5]=document.createTextNode("所属：＠ほぉ〜むカフェ（プレミアムメイド）")
tx[6]=document.createTextNode("メンバーカラー：青")
hea.appendChild(tx[0])
console.log(tx[0])

for(var i=0;i<10;i++){
abr[i]=document.createElement("br")
}

}//txt()

var img=document.createElement("img")

var imgf=function(){
img.src="img/ayu.jpg"
img.className="img-fluid";
}//imf

var capf=function(arg){
cap=document.createElement(arg)
cap.appendChild(hea)
cap.appendChild(tx[1])
cap.appendChild(abr[1])
cap.appendChild(tx[2])
cap.appendChild(abr[2])
cap.appendChild(tx[3])
cap.appendChild(abr[3])
cap.appendChild(tx[4])
cap.appendChild(abr[4])
cap.appendChild(tx[5])
cap.appendChild(abr[5])
cap.appendChild(tx[6])
cap.appendChild(abr[6])

}//capf

var bapp=function(){
fig=document.createElement("figure")
fig.appendChild(img)
imgf()
txt()
capf("figcaption")
fig.appendChild(cap)
document.getElementById("ayu").appendChild(fig);

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

document.getElementById("ayu").appendChild(fig);

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
