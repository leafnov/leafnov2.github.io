window.addEventListener("load", function(){
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function(){
    document.querySelector(".preloader").style.display = "none";

  },1000);
})

var myIndex = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

const nav = document.querySelector(".navbar-item"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectroAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++){
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function(){
    for(let j = 0; j < totalNavList; j++){
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
  })
}

window.addEventListener("scroll",() =>{
  let fromTop = window.scrollY;

  navListAnchor = nav.querySelectorAll("a");

  navListAnchor.forEach(link => {
    let section = document.querySelector(link.hash);

    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add("active");
    }

    else{
      link.classList.remove("active");
    }
  });

});