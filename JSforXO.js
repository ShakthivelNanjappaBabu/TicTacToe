var XorO = "";
function Set(str){
    XorO = str;
}

function GetXorO(item){
    document.getElementById(item).innerText = XorO;
    XorO = "";
}

