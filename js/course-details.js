import { coursesData } from "./data.js";

// For Rating Progress Bar
// const data = [
//   { star: 5, count: 514 },
//   { star: 4, count: 71 },
//   { star: 3, count: 312 },
//   { star: 2, count: 11 },
//   { star: 1, count: 64 },
// ];

// let total_rating = 0;
// let rating_based_on_stars = 0;

// data.forEach((rating, index) => {
//   total_rating += rating.count;
//   rating_based_on_stars += rating.count * rating.star;
// });

// data.forEach((rating) => {
//   const { star, count } = rating;

//   const percentage = (count / total_rating) * 100;

//   let rating_progress = `
//     <div class="rating_progress-value">
//        <p>
//          ${star}
//          <span class="star">&#9733;</span>
//          </p>
//          <div class="progress">
//             <div class="bar" style="width:${percentage}%";></div>
//          </div>
//         <p>${percentage.toFixed()}%</p>
//     </div>
//   `;

//   document.querySelector(".rating_progress").innerHTML += rating_progress;
// });

// const average_rating = (rating_based_on_stars / total_rating).toFixed(1);
// document.querySelector(".total_rating_value p").innerHTML += total_rating;
// document.querySelector(".total_rating-value h2").innerHTML = average_rating;

// dynamically add data for course details
const getCourseId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
};

// upper page image overlay and course title
const loadCourseTitle = () => {
  const courseId = getCourseId();
  const course = coursesData.find((c) => c.id.toString() === courseId);
  const courseTitle = document.querySelector(".course_title");

  if (course) {
    const { name, shortDesc, rating, reviews, students, instructor } = course;
    courseTitle.innerHTML = `<div class="course_summary">
    <p class="breadcrumbs">
      <i class="fa-solid fa-house"></i>
      <a class="link" href="index.html">Home</a> > Courses
    </p>
    <h2>${name}</h2>
    <p class="description">
      ${shortDesc}
    </p>
    <span class="grad"></span>
    <div class="flex_ratings">
      <p class="bestseller">Bestseller</p>
      <p>
        ${rating}
        <span class="icon_list"
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-regular fa-star"></i
        ></span>
      </p>
      <p class="rating">${reviews} rating</p>
      <p class="students">${students} students</p>
    </div>
    <div class="instructor">
      <img src="./images/testimonial2.png" alt="Instructor" />
      <p>
        By <a href="#">${instructor.name}</a> In
        <a href="#">${instructor.profession}</a>
      </p>
    </div>
    <div class="valid_info">
      <div class="update">
        <i class="fa-regular fa-calendar"></i>
        <p>Last updated 12/2024</p>
      </div>
      <div class="language">
        <i class="fa-solid fa-globe"></i>
        <p>English</p>
      </div>
      <div class="certified">
        <i class="fa-solid fa-award"></i>
        <p>Certified Course</p>
      </div>
    </div>
  </div>`;
  } else {
    courseTitle.innerHTML = `<p>Course not found.</p>`;
  }
};

loadCourseTitle();

const loadCourseDetails = () => {
  const courseId = getCourseId();
  const course = coursesData.find((c) => c.id.toString() === courseId);
  const courseContainer = document.querySelector(".course_container");

  if (course) {
    const {
      image,
      learningThings,
      instructor,
      courseContent,
      requirements,
      requireDesc,
    } = course;
    courseContainer.innerHTML = `<article class="course_outline">
    <div class="course_image">
      <img
        src= ${image}
        alt="Course Banner"
      />
    </div>

    <!-- What you'll learn -->
    <div class="learnings">
      <div class="learning_body">
        <div class="learning_content"><h5>What you'll learn</h5>
          <hr
            style="
              border: none;
              height: 2px;
              background-color: rgba(255, 253, 253, 0.4);
              margin: 1.3rem 0;
            "
          />
          <p class="top_desc">
            ${learningThings.desc1}
          </p>
          <div class="speciality">
            <ul>
              ${learningThings.facilities1
                .map((facility) => {
                  return `<li>
                <i class="fa-solid fa-check"></i>
                <p>
                  ${facility.faci}
                </p>
              </li>`;
                })
                .join("")}
            </ul>
            <ul>
              ${learningThings.facilities2
                .map((facility) => {
                  return `<li>
                <i class="fa-solid fa-check"></i>
                <p>
                  ${facility.faci}
                </p>
              </li>`;
                })
                .join("")}
            </ul>
          </div>
          <p>
            ${learningThings.desc2}
          </p></div>
        <a class="show_more"> <span class="down"><i class="fa-solid fa-angle-down"></i></span><span class="up"><i class="fa-solid fa-angle-up"></i></span></a>
      </div>     
    </div>

    <!-- Course Content -->
    <div class="course_content">
      <div class="course_accordion">
        <h5>Course Content</h5>
        <hr
          style="
            border: none;
            height: 2px;
            background-color: rgba(255, 253, 253, 0.4);
            margin: 1.3rem 0;
          "
        />
        <div class="accordion_content">
          <h6 clas>Intro to Course</h6>
          <hr
            style="
              border: none;
              height: 1px;
              background-color: rgba(255, 253, 253, 0.7);
              margin: 1.3rem 0;
            "
          />
          <p>
            ${courseContent.intro}
          </p>
        </div>
        <div class="accordion_content">
          <h6>Course Fundamentals</h6>
          <hr
            style="
              border: none;
              height: 1px;
              background-color: rgba(255, 253, 253, 0.7);
              margin: 1.3rem 0;
            "
          />
          <p>
            ${courseContent.fundamentals}
          </p>
        </div>
        <div class="accordion_content">
          <h6>You can develop skill and setup</h6>
          <hr
            style="
              border: none;
              height: 1px;
              background-color: rgba(255, 253, 253, 0.7);
              margin: 1.3rem 0;
            "
          />
          <p>
            ${courseContent.skill}
          </p>
        </div>
        <div class="accordion_content">
          <h6>Course Description</h6>
          <hr
            style="
              border: none;
              height: 1px;
              background-color: rgba(255, 253, 253, 0.7);
              margin: 1.3rem 0;
            "
          />
          <p>
            ${courseContent.courseDesc}
          </p>
        </div>
      </div>
    </div>

    <!-- Requirements and Description -->
    <div class="requirements_and_desc">
      <div class="requirements_and_desc_body">
        <div class="requirements">
          <h5>Requirements</h5>
          <hr
            style="
              border: none;
              height: 2px;
              background-color: rgba(255, 253, 253, 0.4);
              margin: 1.3rem 0;
            "
          />
          <ul>
            ${requirements
              .map((requirement) => {
                return `<li>
            <i class="fa-solid fa-check"></i>
            <p>
              ${requirement.require}
            </p>
          </li>`;
              })
              .join("")}
        </ul>
        </div>
        <div class="description">
          <h5>Description</h5>
          <hr
            style="
              border: none;
              height: 2px;
              background-color: rgba(255, 253, 253, 0.4);
              margin: 1.3rem 0;
            "
          />
          <ul>
            ${requireDesc
              .map((description) => {
                return `<li>
            <i class="fa-solid fa-check"></i>
            <p>
            ${description.desc}
          </p>
           </li>`;
              })
              .join("")}
      </ul>
        </div>
      </div>
    </div>

    <!-- Instructor -->
    <div class="instructor_container">
      <div class="instructor_body">
        <h5>Instructor</h5>
        <hr
          style="
            border: none;
            height: 2px;
            background-color: rgba(255, 253, 253, 0.4);
            margin: 1.3rem 0;
          "
        />
        <div class="instructor_content">
          <img src=${instructor.image} alt="Instructor" />
          <div class="identity">
            <h5>${instructor.name}</h5>
            <p>${instructor.profession}</p>
            <div class="bio_ranking">
              <p class="reviews">
                <i class="fa-solid fa-star"></i>${instructor.reviews} Reviews
              </p>
              <p class="rating">${instructor.rating} Rating</p>
              <p class="students">
                <i class="fa-solid fa-user-group"></i>${
                  instructor.students
                } Students
              </p>
              <p class="courses">
                <a href="#"
                  ><i class="fa-solid fa-video"></i> ${
                    instructor.courses
                  } Courses</a
                >
              </p>
            </div>
            <p class="desc">
            ${instructor.title}
            </p>
            <div class="socials">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Review -->
    <div class="review_container">
      <div class="review_body">
        <h5>Review</h5>
        <hr
          style="
            border: none;
            height: 2px;
            background-color: rgba(255, 253, 253, 0.4);
            margin: 1.3rem 0;
          "
        />
        <div class="course_rating">
          <div class="total_rating">
            <div class="total_rating-value">
              <h2>5.0</h2>
              <span class="star"
                >&#9733;&#9733;&#9733;&#9733;&#9733;</span
              >
              <p>Course Rating</p>
            </div>
          </div>
          <div class="rating_progress">
            <!-- dynamic from javascript -->
          </div>
        </div>
      </div>
    </div>

    <!-- More Course by Instructor -->
    <div class="more-course">
      <p class="top_course">
        Top Course
      </p>
      <h4>More Course By <span class="name">Rosemary Mante</span></h4>
      <div class="more-course_container">
        <div class="more-course_body">
          <div class="more-course_image">
            <img
              src="https://resources.reed.co.uk/courses/coursemedia/436537/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover.webp"
              alt="Courses"
              class="image"
            />
          </div>
          <div class="more-course_details">
            <h5>HTML Full Course Milestone Online</h5>
            <p class="small">Lorem ipsum dolor sit amet consectetur.</p class="small">
            <div class="course_instructor">
              <img src="./images/testimonial2.png" alt="Instructor" />
              <p>Rosemary Mante</p>
            </div>
            <p>
              4.7
              <span class="icon_list"
                ><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i
                ><i class="fa-regular fa-star"></i
              ></span>
              <span class="total_review">(201,158)</span>
            </p>
            <h6>$12.99 <span class="strike">$47.99</span></h6>
          </div>
        </div>
        <div class="more-course_body">
          <div class="more-course_image">
            <img
              src="https://cdn.hackr.io/uploads/posts/large/1654234535LI9mLOk6yE.png"
              alt="Courses"
              class="image"
            />
          </div>
          <div class="more-course_details">
            <h5>12 Best JavaScript Courses Online in 2024 [Free + Paid]</h5>
            <p class="small">Lorem ipsum dolor sit amet consectetur.</p class="small">
            <div class="course_instructor">
              <img src="./images/testimonial2.png" alt="Instructor" />
              <p>Rosemary Mante</p>
            </div>
            <p>
              4.7
              <span class="icon_list"
                ><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i
                ><i class="fa-regular fa-star"></i
              ></span>
              <span class="total_review">(168,105)</span>
            </p>
            <h6>$12.99 <span class="strike">$47.99</span></h6>
          </div>
        </div>
      </div>
    </div>
  </article>`;

    // Show more/less functionality
    const showMoreButtons = document.querySelectorAll(".show_more");
    if (showMoreButtons) {
      showMoreButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const learningBody = button.parentNode;
          learningBody.classList.toggle("active_show");
        });
      });
    }

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
  } else {
    courseContainer.innerHTML = `<p>Course not found.</p>`;
  }
};

loadCourseDetails();
