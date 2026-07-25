var input = document.getElementById("input");
var list = document.getElementById("list");
function btn(){
    if(input.value==""){
        alert("write your task ")
    }
    else{
    var y= document.createElement("li")
    y.innerHTML=input.value +"<button class='dell' onclick='del(event)'>del</buttton>"
    list.append(y)
    input.value=""
    saveData();
}
}
function  del(){
    event.target.parentElement.remove();
    saveData();
}
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
list.innerHTML = localStorage.getItem("data");