
var div=document.getElementById('app');
var req=new  XMLHttpRequest();
req.open('GET','../script/menuitems.json');
req.onload=()=>{
var data=JSON.parse(req.responseText);
  renderHtml(data);
}
req.send();

function renderHtml(data){
div.innerHTML=`<h1 class="menu-heading">Menu-items</h1>
${data.map((value)=>{
return `
<div class="special-item">
<img class="specials-photos" src="${value.img}"
<h3>${value.name}</h3>
</div>
`
}).join(" ")}`;
}

 