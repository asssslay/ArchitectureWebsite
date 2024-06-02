const slider = () => {
  //   const leftBtn = document.querySelector(".arrow-left-btn");
  //   const rightBtn = document.querySelector(".arrow-right-btn");
  //   const currentProjectCounter = document.querySelector(
  //     ".current-project-counter"
  //   );
  //   const projectCounter = document.querySelector(".project-counter");
  //   const arrowActiveBtn = document.querySelector(".arrow-active-btn");
  //   let currentProject = 1;
  //   function changeProject(direction) {
  //     if (direction === "left" && currentProject > 1) {
  //       currentProject--;
  //     } else if (direction === "right" && currentProject < 2) {
  //       // замініть 2 на максимальне значення кількості проектів
  //       currentProject++;
  //     }
  //     document.querySelector(
  //       ".hero-photo"
  //     ).src = `/public/hero_photo-${currentProject}.jpg`;
  //     document.querySelector("h2 strong").innerText = `Lorum ${currentProject}`;
  //     currentProjectCounter.innerText = currentProject;
  //     if (currentProject === parseInt(projectCounter.innerText)) {
  //       arrowActiveBtn.classList.remove("arrow-active-btn");
  //       if (direction === "left") {
  //         rightBtn.classList.add("arrow-active-btn");
  //       } else if (direction === "right") {
  //         leftBtn.classList.add("arrow-active-btn");
  //       }
  //     }
  //   }
  //   leftBtn.addEventListener("click", () => changeProject("left"));
  //   rightBtn.addEventListener("click", () => {
  //     changeProject("right");
  //   });
};

export default slider;
