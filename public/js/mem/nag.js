var hea,tx=[]
var abr=[],cap,fig

var txt=function(){
hea=document.createElement("h4")
    //hea.setAttribute("text-align","center")
tx[0]=document.createTextNode("ナギ")
tx[1]=document.createTextNode("生年月日：10月20日")
tx[2]=document.createTextNode("身長：160cm")
tx[3]=document.createTextNode("血液型：ミルクティー型")
tx[4]=document.createTextNode("出身地：モフモフ草原")
tx[5]=document.createTextNode("特技：歌、ダンス（モダン、バレエ、ジャズ、HIP HOP)")
tx[6]=document.createTextNode("趣味：音楽鑑賞")
tx[7]=document.createTextNode("所属：＠ほぉ〜むカフェ本店7階")
tx[8]=document.createTextNode("メンバーカラー：オレンジ")
hea.appendChild(tx[0])
console.log(tx[0])

for(var i=0;i<11;i++){
abr[i]=document.createElement("br")
}

}//txt()

var img=document.createElement("img")

var imgf=function(){
img.src="img/nag.jpg"
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

var big=function(){
fig=document.createElement("figure")
fig.appendChild(img)
imgf()
txt()
capf("figcaption")
fig.appendChild(cap)
document.getElementById("nag").appendChild(fig);

}//app

var sma=function(){

var aid=document.getElementById("nag")

imgf()
    img.className="img-fluid"
    img.setAttribute("data-toggle","modal")
    img.setAttribute("data-target","#nmod")
aid.appendChild(img)
    console.log(aid)

var mod=document.createElement("div")
mod.className="modal fade"
mod.setAttribute("role","dialog")
mod.setAttribute("id","nmod")

var dia=document.createElement("div")
dia.className="modal-dialog"
txt()
capf("div")
cap.className="modal-content"

dia.appendChild(cap)
mod.appendChild(dia)
aid.appendChild(mod)

}//app


if(w>600){big()
}else{sma()
}
