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
  const courses = document.querySelector(".course_parent_div");
  courses.innerHTML = `${coursesData.map((coursesInfo) => {
    console.log(coursesInfo);
  })}`;
};

loadCourses();
