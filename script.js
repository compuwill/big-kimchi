// function onLoad() {
//   document.getElementById("body").classList.add("show")
// }


var img = new Image();
img.onload = function() {
  document.getElementById("body").style.backgroundImage = img.src;
  document.getElementById("body").classList.add("show");
}
img.src = "big_kimchi.jpg";




const loadImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

loadImage("big_kimchi.jpg").then(image => 
  {
    console.log(image, `\nloaded? ${image.complete}`);
    document.getElementById("cover").style.backgroundImage = `url(${image.src})` ;
  }
                                 
);





document.body.addEventListener('click', nextImage, true); 

var index = 0

function nextImage()
{
  let newIndex = getRandomInt(13);
  //ensure we don't have the same one
  console.log(newIndex,index)
  while(newIndex == index)
  {
    newIndex = getRandomInt(13);
  }
  index = newIndex
  document.getElementById("cover").style.backgroundImage = `url(/gallery/${index}.jpg)` ;
  document.getElementById("cover").style.backgroundPosition = `50% 50%` ;
  document.getElementsByClassName("title")[0].style.opacity = 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}