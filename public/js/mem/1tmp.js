var hea,tx=[]
var abr=[],cap,fig

var txt=function(){
hea=document.createElement("h4")
    //hea.setAttribute("text-align","center")
tx[0]=document.createTextNode("あゆ")
tx[1]=document.createTextNode("生年月日：3月10日")
tx[2]=document.createTextNode("身長：157cm")
tx[3]=document.createTextNode("血液型：もちもち型")
tx[4]=document.createTextNode("出身地：ダイヤモンドプラネット")
tx[5]=document.createTextNode("特技：歌、声量があること")
tx[6]=document.createTextNode("趣味：美容、アニメ")
tx[7]=document.createTextNode("所属：＠ほぉ〜むカフェ（プレミアムメイド）")
tx[8]=document.createTextNode("メンバーカラー：青")
hea.appendChild(tx[0])

for(var i=0;i<11;i++){
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
document.getElementById("ayu").appendChild(fig);

}//app

var sapp=function(){

var aid=document.getElementById("ayu")
    //        mod.className="modal"

imgf()
    img.className="img-fluid"
    img.setAttribute("data-toggle","modal")
    img.setAttribute("data-target","#mid")
aid.appendChild(img)

var mod=document.createElement("div")
mod.className="modal fade"
mod.setAttribute("role","dialog")
mod.setAttribute("id","mid")
var dia=document.createElement("div")
dia.className="modal-dialog"
txt()
    capf("div")
        console.log(cap)
    cap.className="modal-content"

    dia.appendChild(cap)
mod.appendChild(dia)
aid.appendChild(mod)

console.log(aid)

txt()

    //document.getElementById("ayu").appendChild(mod);

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
