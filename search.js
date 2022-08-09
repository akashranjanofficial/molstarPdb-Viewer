function toggleShow () {
    var el = document.getElementById("box");
    el.classList.toggle("show");
}

//   function getlink() {
//     //const str = document.getElementById("box").value;
//     const str=  document.getElementById("outputsearch").value
//     const link="https://files.rcsb.org/download/"+str+".pdb";
//     console.log(link);
//     sessionStorage.setItem("link", link);
//   //  returnlink(link);
    
//     return link;

// }
function redirect(){
    window.location.href='demo.html';
}

function valueSender()
{
var str=document.getElementById("box").value;
localStorage.setItem("myValue", str);
window.location.href="demo.html";
}

