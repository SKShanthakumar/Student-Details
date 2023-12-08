var name1 = document.getElementById("name");
var age1 = document.getElementById("age");
var gender1 = document.getElementById("gender");
var course1 = document.getElementById("course");
var email1 = document.getElementById("email");
var save = document.querySelector(".btn");
var container = document.querySelector(".container2");

save.addEventListener("click",function(){
    var div = document.createElement("div");
    div.setAttribute("class","row");
    div.innerHTML=`<div class="op" style="width: 120px;">
                        <p>${name1.value}</p>
                    </div>
                    <div class="op" style="width: 60px;">
                        <p>${age1.value}</p>
                    </div>
                    <div class="op" style="width: 100px;">
                        <p>${gender1.value}</p>
                    </div>
                    <div class="op" style="width: 100px;">
                        <p>${course1.value}</p>
                    </div>
                    <div class="op" style="width: 250px;">
                        <p>${email1.value}</p>
                    </div>
                    <div class="op" style="width: 100px;">
                        <button class="dlt" onclick="del(event)">Delete</button>
                    </div>`;
    container.append(div);
    container.style.display="inline-block";
    name1.value='';
    age1.value='';
    gender1.value='';
    course1.value='';
    email1.value='';
    });

function del(event){
    alert("Do you want to delete?");
    event.target.parentNode.parentNode.remove();
}