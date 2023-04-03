const skillstab = document.querySelector("[data-skills]");
const exptab = document.querySelector("[data-exp]");
const educationtab = document.querySelector("[data-education]");
const skills = document.querySelector(".skills");
const exp = document.querySelector(".experience");
const education= document.querySelector('.education');

let currenttab = skillstab;
currenttab.classList.add('current')



function switchtab(clickedtab) {
    
    if (clickedtab === skillstab) {
      skills.classList.remove("active");
      exp.classList.remove("active");
      education.classList.remove("active");
      skills.classList.add("active");
    } else if (clickedtab === exptab) {
      skills.classList.remove("active");
      exp.classList.remove("active");
      education.classList.remove("active");
      exp.classList.add("active");
    } else if (clickedtab === educationtab) {
      skills.classList.remove("active");
      exp.classList.remove("active");
      education.classList.remove("active");
      education.classList.add("active");
    }
  }
  

skillstab.addEventListener("click", () => {
  switchtab(skillstab);
});

exptab.addEventListener("click", () => {
  switchtab(exptab);
});

educationtab.addEventListener("click", () => {
    switchtab(educationtab);
  });