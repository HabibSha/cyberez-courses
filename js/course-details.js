// Show more/less
const showMore = document.querySelector(".show_more");
showMore.addEventListener("click", () => {
  const learningBody = showMore.parentNode;
  learningBody.classList.toggle("active_show");
});

// For Accordion
const accordionItems = document.querySelectorAll(".accordion_content");

accordionItems.forEach((item) => {
  // Listen for clicks on each accordion item
  item.addEventListener("click", function (event) {
    const h6 = item.querySelector("h6");
    if (h6.contains(event.target)) {
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    }
  });
});

// For Rating Progress Bar
const data = [
  { star: 5, count: 514 },
  { star: 4, count: 71 },
  { star: 3, count: 312 },
  { star: 2, count: 11 },
  { star: 1, count: 64 },
];

let total_rating = 0;
let rating_based_on_stars = 0;

data.forEach((rating, index) => {
  total_rating += rating.count;
  rating_based_on_stars += rating.count * rating.star;
});

data.forEach((rating) => {
  const { star, count } = rating;

  const percentage = (count / total_rating) * 100;

  let rating_progress = `
    <div class="rating_progress-value">
       <p>
         ${star}
         <span class="star">&#9733;</span>
         </p>
         <div class="progress">
            <div class="bar" style="width:${percentage}%";></div>
         </div>
        <p>${percentage.toFixed()}%</p>
    </div>
  `;

  document.querySelector(".rating_progress").innerHTML += rating_progress;
});

const average_rating = (rating_based_on_stars / total_rating).toFixed(1);
// document.querySelector(".total_rating_value p").innerHTML += total_rating;
document.querySelector(".total_rating-value h2").innerHTML = average_rating;
