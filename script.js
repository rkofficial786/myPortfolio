const skillstab = document.querySelector("[data-skills]");
const exptab = document.querySelector("[data-exp]");
const educationtab = document.querySelector("[data-education]");
const skills = document.querySelector(".skills");
const exp = document.querySelector(".experience");
const education= document.querySelector('.education');

let currenttab = skillstab;
currenttab.classList.add('current')
AOS.init({
    offset: 120,
    duration: 1100
});

function switchtab(clickedtab) {
    if(currenttab!=clickedtab){

        currenttab.classList.remove("current");
        currenttab = clickedtab;
        currenttab.classList.add("current");


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


  document.querySelector('#seemore').addEventListener('click' , ()=>{
    alert("No more projects , will be added later") ;
  })



  var ul = document.querySelector('#side-menu')

  function openmenu(){
  ul.style.left= '0'
  }

  function closemenu(){
    ul.style.left='-200px'
  }


  //contact form

