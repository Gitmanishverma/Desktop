function data() {
    // alert("hii")
    var data = "<p>The innerHTML property can be used to write the dynamic html on the html document</p>"
    document.getElementById("data").innerHTML=data
}
function check(){
    var mas;
    if(document.myform.user.name.value.length>5){
        mes="strong"
    }
    else{
        mes="weak"
    }
    document.write(mes)

    document.getElementById("inn").innerText=mes;

}


    