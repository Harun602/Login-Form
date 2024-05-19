
var imageData = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg',
  'images/4.png'];
var index = 0;

function changeImage(){
  var mainImage = document.getElementById('mainImage');
   mainImage.setAttribute('src', imageData [index]);
   index++;
  if(index >= imageData.length){
    index = 0;
  }
}
 setInterval(changeImage,2000);