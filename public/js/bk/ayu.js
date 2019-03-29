if(w>600){
var fig=document.createElement("figure")

var img=document.createElement("img")
img.src="img/ayu.jpg"
img.setAttribute("class", "img-fluid");

var cap=document.createElement("figcaption")
var hea=document.createElement("h4")
var tx1=document.createTextNode("ayu")

hea.appendChild(tx1)
cap.appendChild(hea)
fig.appendChild(cap)

fig.appendChild(img)
document.getElementById("ayu").appendChild(fig);
}else{

var fig=document.createElement("figure")

var img=document.createElement("img")
img.src="img/ayu.jpg"
img.setAttribute("class", "img-fluid");
img.setAttribute("data-toggle", "modal");
img.setAttribute("data-target", "#ayu");

var mod=document.createElement("div")
mod.setAttribute("class", "modal-fade");
mod.setAttribute("id", "ayu");
mod.setAttribute("role", "dialog");

var dia=document.createElement("div")
dia.setAttribute("class", "modal-dialog");
dia.setAttribute("role", "document");
var con=document.createElement("div")
con.setAttribute("class", "modal-content");
var hea=document.createElement("div")
hea.setAttribute("class", "modal-header");
var bod=document.createElement("div")
bod.setAttribute("class", "modal-body");
var h1=document.createElement("h1")
var tx1=document.createTextNode("ayu")
var tx2=document.createTextNode("12.16")
hea.appendChild(tx1)
bod.appendChild(tx2)

con.appendChild(hea)
con.appendChild(bod)
dia.appendChild(con)
mod.appendChild(dia)
fig.appendChild(mod)

fig.appendChild(img)

document.getElementById("ayu").appendChild(fig);


}
