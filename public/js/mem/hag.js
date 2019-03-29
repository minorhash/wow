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

var big=function(){
fig=document.createElement("figure")
fig.appendChild(img)
imgf()
txt()
capf("figcaption")
fig.appendChild(cap)
document.getElementById("hag").appendChild(fig);

}//app

var sma=function(){

var aid=document.getElementById("hag")

imgf()
    img.className="img-fluid"
    img.setAttribute("data-toggle","modal")
    img.setAttribute("data-target","#h-mod")
aid.appendChild(img)
    console.log(aid)

var mod=document.createElement("div")
mod.className="modal fade"
mod.setAttribute("role","dialog")
mod.setAttribute("id","h-mod")

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
