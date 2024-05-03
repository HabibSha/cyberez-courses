import { coursesData } from "./data.js";

// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".courses_container article");
  articles.forEach(function (article) {
    const courseBodies = article.querySelectorAll(".course_body");
    if (courseBodies.length > 0) {
      courseBodies[courseBodies.length - 1].classList.add("last-course-body");
    }
  });
});

// dynamically add data for course body and hover element
const loadCourses = () => {
  const courses = document.querySelector(".courses_container");
  courses.innerHTML = `${coursesData
    .map((coursesInfo) => {
      const {
        name,
        subtitle,
        shortDesc,
        requireDesc,
        instructor,
        image,
        rating,
        reviews,
      } = coursesInfo;
      return `<article>
      <div class="course_body">
    <div class="course_image">
      <img
        src=${image}
        alt="Courses"
        class="image"
      />
    </div>
    <div class="course_details">
      <h5>${name}</h5>
      <p class="small">${subtitle}</p>
      <div class="instructor">
        <img src=${instructor.image} alt="Instructor" />
        <p>${instructor.name}</p>
      </div>
      <p>
        ${rating}
        <span class="icon_list"
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-regular fa-star"></i
        ></span>
        <span class="total_review">(${reviews})</span>
      </p>
      <h6>$12.99 <span class="strike">$47.99</span></h6>
    </div>
    <!-- hover element -->
    <div class="hover_element">
      <h5>${name}</h5>
      <p class="small">${subtitle}</p>
      <p>
        ${shortDesc}
      </p>
      <div class="will_learn">
        <i class="fa-solid fa-check"></i>
        <p>
          ${requireDesc.desc1}
        </p>
      </div>
      <div class="will_learn">
        <i class="fa-solid fa-check"></i>
        <p>${requireDesc.desc2}</p>
      </div>
      <div class="will_learn">
        <i class="fa-solid fa-check"></i>
        <p>
        ${requireDesc.desc3}
        </p>
      </div>
      <div class="hover_button">
        <button class="btn">Add to cart</button>
      </div>
      <div class="select_sign"></div>
      <div class="vector-right1">
        <img src="./images/vector-right1.png" alt="vector" />
      </div>
    </div>
  </div></article>`;
    })
    .join("")}`;
};

loadCourses();
