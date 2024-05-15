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


const messageForm = document.querySelector("#leave_message_")


function getInfo(event) {    //const GetFormInfo = 

    event.preventDefault();

    let name = event.target.usersName.value
    let email = event.target.usersEmail.value
    let message = event.target.usersMessage.value


    console.log(name)
    console.log(email)
    console.log(message)


    let messageSection = document.querySelector('#usersMessage_')

    let  messageList = document.querySelector('#Messages')   

    let newMessage = document.createElement("li")

    newMessage.innerHTML = '<a href="mailto: "' + email + '>' + name + '</a> <span>' + message + '</span>'

    //let removeButton = <button type="button">remove</button>
    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener('click', function() {
        let entry = this.parentNode 
        entry.remove()
    })


    newMessage.appendChild(removeButton)

    messageList.append(newMessage)





    //newMessage.innerHTML('<a href="mailto:' + usersEmail + '">' + usersName + '</a> <span>' + usersMessage + '</span>');
    //newMessage.appendChild()
    

    messageForm.reset()

}



messageForm.addEventListener("submit", getInfo);