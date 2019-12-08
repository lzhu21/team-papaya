function updateName()
{
  var nameElement = document.getElementById("studioname");
  var studioName = nameElement.value;
  document.getElementById("replace").innerHTML = studioName;
  sessionStorage.setItem("studioName", nameElement.value);
}
var studioName = sessionStorage.getItem("studioName");
document.getElementById("replace").innerHTML = studioName;


function changeColor(name) {
  var nameElement = document.getElementById(name);
  nameElement.style.opacity =  ( nameElement.style.opacity == ".9" ? ".25" : ".9");
}

function changePage(num) {
  var counter = 1;
  var button  = document.getElementById( "b" + counter);
  while ( button )
  {
    if (counter == num && num == 1) {
      button.className = 'fas fa-circle';
      button.style.opacity = "1";
      document.getElementById("stuff").innerHTML = "WELCOME TO<br><span id='replace'>STUDIO NAME</p>";
      document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/508801763349102596/647512324047110144/1.png')";
    } else if (counter == num && num == 2) {
      button.className = 'fas fa-circle';
      button.style.opacity = "1";
      document.getElementById("stuff").innerHTML = "HERE'S A<br> QUICK TOUR";
      document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/508801763349102596/647512324047110144/1.png')";
    } else if (counter == num && num == 3) {
      button.className = 'fas fa-circle';
      button.style.opacity = "1";
      document.getElementById("stuff").innerHTML = "";
      document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/508801763349102596/647526335115165702/MacBook_Pro_-_46.png')";
    } else if (counter == num && num == 4) {
      button.className = 'fas fa-circle';
      button.style.opacity = "1";
      document.getElementById("stuff").innerHTML = "";
      document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/508801763349102596/647529091662348309/MacBook_Pro_-_47_1.png')";
    } else if (counter == num && num == 5) {
      button.className = 'fas fa-circle';
      button.style.opacity = "1";
      document.getElementById("stuff").innerHTML = "";
      document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/508801763349102596/647531607179132928/MacBook_Pro_-_48.png')";
    } else if (counter == num && num == 6) {
      button.className = 'fas fa-circle';
      button.style.opacity = "1";
      document.getElementById("stuff").innerHTML = "";
      document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/508801763349102596/647531950055096360/MacBook_Pro_-_49_1.png')";
    } else if (counter == num && num == 7) {
      button.className = 'fas fa-circle';
      button.style.opacity = "1";
      document.getElementById("stuff").innerHTML = "NOW YOU'RE<br>READY TO<br>CREATE";
      document.getElementById("b8").innerHTML = "<p3>START</p3>";
      document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/508801763349102596/647512324047110144/1.png')";
    } else {
      if (counter != 8) {
        button.className = 'far fa-circle';
      }
      if (num != 7) {
        document.getElementById("b8").innerHTML = "<p3>SKIP</p3>";
      }
      button.style.opacity = "0.25";
    }
     button  = document.getElementById("b" + (++counter));
  }
}