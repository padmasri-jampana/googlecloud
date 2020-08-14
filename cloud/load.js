          function GFG_Fun() { 
var userinput=prompt("Enter the image name","day");
if(userinput=="cloud"){
var img = document.createElement('img'); 
            img.src =  'https://storage.cloud.google.com/assign-bucket/cloud/cloud.jpg'; 
            document.getElementById('body').appendChild(img).width="400"; 
}
else if(userinput=="facebook"){
var img = document.createElement('img'); 
            img.src =  'https://storage.cloud.google.com/assign-bucket/cloud/facebook.jpg'; 
            document.getElementById('body').appendChild(img).width="400"; 
}
else if(userinput=="flower"){
var img = document.createElement('img'); 
            img.src =  'https://storage.cloud.google.com/assign-bucket/cloud/flower.jpg'; 
            document.getElementById('body').appendChild(img).width="400"; 
}
else if(userinput=="robot"){
var img = document.createElement('img'); 
            img.src =  'https://storage.cloud.google.com/assign-bucket/cloud/robot.jpg'; 
            document.getElementById('body').appendChild(img).width="400"; 
}

else if(userinput=="day"){
var img = document.createElement('img'); 
            img.src =  'https://storage.cloud.google.com/image-appengine/cloud/day.png'; 
            document.getElementById('body').appendChild(img).width="400"; 
}
else{
alert("Oops! Not found");   
}
        }  
