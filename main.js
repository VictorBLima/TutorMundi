
const rating = document.querySelectorAll(".rating svg");

rating.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    rating.forEach((otherStar, otherIdx) => {
      if ( clickedIdx <= otherIdx) {
        otherStar.classList.add("active");
      }
      else{
          otherStar.classList.remove('active')
      }
    });
    console.log(`star of index ${clickedIdx +1} was clicked`);
  });
});
