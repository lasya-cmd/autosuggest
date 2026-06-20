var users = [
     {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "../images/john.png"
     },
     {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "../images/jane.png"
     }
]

var curId = 0;

function toggle(){
       //toggle curid from 0->1 and 1->0
       curId = (curId + 1) % 2;
       var user = users[curId];
       document.getElementById("user-img").src=user.image;

       document.getElementById("user-name").innerText=user.name;

       document.getElementById("user-gender").innerText=user.gender;
       

}