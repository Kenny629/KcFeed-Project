const span = document.querySelector(".bars")
const header = document.querySelector("header")


span.addEventListener("click", toggleNavbar);
function check(){
  console.log("Button Clicked");
}

function toggleNavbar(){
  if (header.classList.contains("show")){
    header.classList.remove("show");
    }else{
      header.classList.add("show");
    }
}