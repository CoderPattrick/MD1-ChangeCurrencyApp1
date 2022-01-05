function currency(){
    let s2 = document.getElementById("select2").value;
    document.getElementById("currency").innerHTML = s2;
}
function convert(){
    let a = document.getElementById("ammount").value;
    let a1 = parseInt(a);
    let s1 = document.getElementById("select1").value;
    let s2 = document.getElementById("select2").value;
    let x;
    if (s1==s2){
        x=1;
    }
    if (s1=="VND"&&s2=="USD"){
        x = 1/22855;
    }

    if (s1=="USD"&&s2=="VND") {
        x = 22855;
    }
    let result = x*a1;
    document.getElementById("output").innerText = result;
    document.getElementById("currency").innerText = s2;
}


