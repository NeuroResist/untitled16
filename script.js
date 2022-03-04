console.log("123123")


// Раскрытие меню по нажатию мыши
const sections = document.querySelectorAll(".section");

sections.forEach((section, i) => {
    section.addEventListener("click", () => {
        section.nextElementSibling.classList.toggle("flex")
        section.querySelector(".section__arrow").classList.toggle("onclick");
        section.querySelector(".section__header").classList.toggle("red-text");

        const subSection = section.nextElementSibling.querySelectorAll(".sub-section");
        console.log(subSection)
        subSection.forEach(subSection => {
            subSection.addEventListener("click", () => {
                subSection.querySelector(".section__arrow").classList.toggle("onclick");
                subSection.querySelector(".section_hidden").classList.toggle("flex");
            })
        })
    })
});


const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

rightArrow.onclick = () => {
    const selected = document.querySelector(".selected");
    if (!selected.nextElementSibling.classList.contains("right-arrow")) {
        selected.previousElementSibling.classList.remove("arrow_disabled")
        selected.classList.remove("selected");
        selected.nextElementSibling.classList.add("selected");
        if(selected.nextElementSibling.nextElementSibling.classList.contains("right-arrow")){
            selected.nextElementSibling.nextElementSibling.classList.add("arrow_disabled")
        }
    }

}
leftArrow.onclick = () => {
    const selected = document.querySelector(".selected");
    if (!selected.previousElementSibling.classList.contains("left-arrow")) {
        selected.nextElementSibling.classList.remove("arrow_disabled")
        selected.classList.remove("selected");
        selected.previousElementSibling.classList.add("selected");
        if(selected.previousElementSibling.previousElementSibling.classList.contains("left-arrow")){
            selected.previousElementSibling.previousElementSibling.classList.add("arrow_disabled")
        }
    }
}


// class list
// отдельные переменные
//
