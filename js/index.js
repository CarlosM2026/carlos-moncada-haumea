const footer = document.createElement("footer")

const footer_container = document.querySelector("#footer_container")

footer_container.appendChild(footer)

const today = new Date() 

const thisYear = today.getFullYear()

const footer_ = document.querySelector("footer")

const copyRight = document.createElement("p")

copyRight.setAttribute("id","CopyRight")

copyRight.innerHTML = "Carlos Moncada " + thisYear;

footer_.appendChild(copyRight)



const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub", "C++", "Assembly", "Git"]

const skillsSection = document.querySelector("#Skills")

const skillList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length;i++) {
    let skill = document.createElement("li")
    skill.innerHTML = skills[i]
    skillList.appendChild(skill)
}
