function showProject(projectId) {
    const projects = {
        project1: {
            title: "Hotel Room Booking System",
            description: "So we develop a web based application called “Hotel Room Booking System”. This website is helpful for Hotel and hotels for keeping records of booking. <br>Built using HTML, CSS, JavaScript and PHP in project"  ,
            link: "#"
        },
        // project2: {
        //     title: "Project 2: To-Do List App",
        //     description: "A JavaScript-based to-do list app that allows you to add, edit, and remove tasks. It also stores tasks in local storage for persistence.",
        //     link: "#"
        // },
        // project3: {
        //     title: "Project 3: Personal Blog",
        //     description: "A personal blog created with HTML, CSS, and a bit of JavaScript to make it interactive. It features a modern, minimalistic layout.",
        //     link: "#"
        // }
    };

    const project = projects[projectId];
    const container = document.querySelector(".container");

    container.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}">Check out the project</a>
        <br><br>
        <a href="#" onclick="goBack()">Go Back to Portfolio</a>
    `;
}

function goBack() {
    window.location.reload(); // Refreshes the page to go back to the portfolio
}
