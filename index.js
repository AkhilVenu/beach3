function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
}
function disp() {
var outdata = document.getElementById('contain_out');
  if(!document.getElementById('o'+i))
  {
    var ele = document.createElement("div");
    var aTag=document.createElement("a");
    ele.setAttribute("id",'out'+i);
    ele.setAttribute("class","mainbg");
    outdata.appendChild(ele);

     outdata = document.getElementById('out'+i);
     ele = document.createElement("div");
     ele.setAttribute("id",'middle'+i);
     ele.setAttribute("class","row");
     outdata.appendChild(ele);

     outdata = document.getElementById('middle'+i);
     ele = document.createElement("div");
    var aTag=document.createElement("a");

    ele.setAttribute("id",'in'+i);
    ele.setAttribute("class","column");

    ele.innerHTML="<a href='"+"'>"+name+"</a>";
    outdata.appendChild(ele);

/*
    var link = document.getElementById('o'+i);
    aTag.setAttribute('href',"name.html");
    link.appendChild(aTag);
*/
 }
  i++;
  //window.location.href="index.html";
}
