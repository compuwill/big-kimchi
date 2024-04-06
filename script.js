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