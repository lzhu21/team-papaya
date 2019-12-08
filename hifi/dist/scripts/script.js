$(document).ready(function(){

$('#bgcolor').on('change', function (e) {
var optionSelected = $("option:selected", this);
var valueSelected = '#' +this.value;

$("#background").css("background-color", valueSelected);
$("#design").css("background-color", valueSelected);
$(".left1").css("background-color", valueSelected);
$(".squareShape").css("background-color", valueSelected);
$(".left2").css("background-color", valueSelected);
$(".left3").css("background-color", valueSelected);

});
});

var textureNum = sessionStorage.getItem("textureChosen") != null ? Number(sessionStorage.getItem("textureChosen")) : 0;

var textureDesigns = ["url('')","url('https://cdn.discordapp.com/attachments/508801763349102596/652641829141086208/texture1.jpg')", "url('https://cdn.discordapp.com/attachments/508801763349102596/652673936336879616/59543384_1066391113544824_5983366287777071104_n.jpg')","url('https://cdn.discordapp.com/attachments/508801763349102596/652676396329467905/78842603_566593743909475_3867407519341084672_n.jpg')"]

function changeTexture(text) {
  if (text == 'plain') {
    textureNum = 0;
  } else if (text == 'fabric') {
    textureNum = 1;
  } else if (text == 'waves') {
    textureNum = 2;
  } else if (text == 'spotty') {
    textureNum = 3;
  }
  document.getElementById('design').style.backgroundImage = textureDesigns[textureNum];
  $(".squareShape").css("background-image", textureDesigns[textureNum]);
}

var front = true;

function flipDesign() {
  front = !front;
  if (front) {
    document.getElementById('design').src = "https://cdn.discordapp.com/attachments/508801763349102596/651927108020469762/testing.png";
  } else {
    document.getElementById('design').src = "https://cdn.discordapp.com/attachments/508801763349102596/652297367831183378/back.png";
  }
}

var neckNum = sessionStorage.getItem("neckNum") != null ? Number(sessionStorage.getItem("neckNum")) : 0;
var sleeveNum = sessionStorage.getItem("sleeveNum") != null ? Number(sessionStorage.getItem("sleeveNum")) : 0;
var waistNum = sessionStorage.getItem("waistNum") != null ? Number(sessionStorage.getItem("waistNum")) : 0;

var neckDesigns = ["https://cdn.discordapp.com/attachments/508801763349102596/651927108020469762/testing.png", 'https://cdn.discordapp.com/attachments/508801763349102596/652652298329391116/80068680_566696617444033_254215940269408256_n.png', 'longsleeve', 'vneckandlongsleeve', 'crop top', ]

function changeShape(shape) {
  if (shape == 'neck') {
    neckNum = neckNum == 0 ? 1 : 0;
    //console.log('neck changed to ' + neckNum);
  } else if (shape == 'sleeve') {
    sleeveNum = sleeveNum == 0 ? 2 : 0;
    //console.log('sleeve changed to ' + sleeveNum);
  } else if (shape == 'waist') {
    waistNum = waistNum == 0 ? 4 : 0;
    //console.log('waist changed to ' + waistNum);
  }

  var total = neckNum + sleeveNum + waistNum;
  document.getElementById('design').src = neckDesigns[total];
  console.log('design changed to ' + total);
}

function save() {
  console.log("SAVED!");

  // save design name
  var nameElement = document.getElementById("designName");
  var designName = nameElement.value;
  document.getElementById("designName").innerHTML = designName;
  sessionStorage.setItem("designName", nameElement.value);

  // save shape of design
  sessionStorage.setItem("neckNum", neckNum);
  sessionStorage.setItem("sleeveNum", sleeveNum);
  sessionStorage.setItem("waistNum", waistNum);

  // save color
  var colorChosen = document.getElementById("bgcolor");
  sessionStorage.setItem("colorChosen", colorChosen.value);

  // save texture
  sessionStorage.setItem("textureChosen", textureNum);
}

// called every session to retrieve saved design
var designName = sessionStorage.getItem("designName");
document.getElementById("designName").value = designName;
console.log("Retrieved Neck: " + sessionStorage.getItem("neckNum"));
console.log("Retrieved Sleeve: " + sessionStorage.getItem("sleeveNum"));
console.log("Retrieved Waist: " + sessionStorage.getItem("waistNum"));
var total = neckNum + sleeveNum + waistNum;
document.getElementById('design').src = neckDesigns[total];
console.log("Retrieved Design: " + total);

var colorSelected = sessionStorage.getItem("colorChosen") != null ? "#" + sessionStorage.getItem("colorChosen") : "#ffffff";

console.log("Retrieved Color: " + colorSelected);

document.getElementById("bgcolor").value = colorSelected;
document.getElementById("background").style.backgroundColor = colorSelected != null ? colorSelected : "ffffff";
$(".left1").css("background-color", colorSelected);
$(".left2").css("background-color", colorSelected);
$(".left3").css("background-color", colorSelected);


console.log("Retrieved texture: " + textureNum);
var textureSelected = sessionStorage.getItem("textureChosen") != null ? sessionStorage.getItem("textureChosen") : 0;
console.log(textureSelected);
console.log(textureDesigns[textureSelected]);
document.getElementById('design').style.backgroundImage = textureDesigns[textureSelected];
$(".squareShape").css("background-image", textureDesigns[textureSelected]);




// SHARE FUNCTION

function sendMessageIndicator() {
  alert("Shared successfully!");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("shareButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
if(btn != null) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
if(span != null) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
if(window != null) {
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function changeColor(button) {
  if(document.getElementById(button).style.color == 'gray') {
    document.getElementById(button).style.color = 'black';
  } else {
    document.getElementById(button).style.color = 'gray';
  }
}
