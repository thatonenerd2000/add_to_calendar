let title = "Diversity Demo Day";
let details = "The description";
const startDate = "2021-10-10"
const endDate = "2021-10-10"

let gCalUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title.replaceAll(" ", "+")}&dates=20210811T080000/20210811T100000&ctz=America/Los_Angeles&details=${details.replaceAll(" ", "+")}&location=Location+of+the+event&pli=1&uid=1627492462addeventcom&sf=true&output=xml`;
let outlookUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&startdt=${startDate}T12%3A00%3A00-05%3A00&enddt=${startDate}T12%3A30%3A00-05%3A00&subject=${title.replaceAll(" ", "+")}&body=${details.replaceAll(" ", "+")}`;

document.querySelector("#gcal-button").onclick = () => {
    window.open(gCalUrl, '_blank');
};

document.querySelector("#outlook-button").onclick = () => {
    window.open(outlookUrl, '_blank');
};
