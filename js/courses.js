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
