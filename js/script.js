function myFunction() {
    const x = document.getElementById("navtop");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

let slideIndex = 0;
  
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // 3 seconds
}

function hideImage(element) {
  element.style.display = "none";
}

function showImage(element) {
  const imageDiv = document.getElementById("full-image-div");
  imageDiv.style.display = "flex";
  
  const srcImage = element.getElementsByTagName('img');
  const imageToShow = document.getElementById("full-image");
  imageToShow.src = srcImage[0].src; 
  imageToShow.alt = srcImage[0].alt; 
}