const a = document.getElementById("container1").children[2];
const b = document.getElementById("container2");
b.appendChild(a);

const c = document.getElementById("container2").children[0];
c.remove();

const d = document.createElement("div");
d.className = "item";
d.textContent = "10";
const e = document.getElementById("container3");
e.appendChild(d);

const f = document.getElementsByClassName("containerBlue");
for( var i = 0; i < f.length; i++){
  f[i].style.color= "red";
}