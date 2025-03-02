import "./style.css";
import "./dialog.css"
import { contentDOM } from "./DOMcache";
import { loadTasks } from "./dialog";

const d = new Date();
const month = d.toLocaleString('default', { month: 'long' });

contentDOM.allSection.addEventListener("click", () => sectionMake("All Tasks"));
contentDOM.todaySection.addEventListener("click", () => sectionMake("Today"));
contentDOM.weekSection.addEventListener("click", () => sectionMake("Week"));
contentDOM.importantSection.addEventListener("click", () => sectionMake("Important"));
contentDOM.testProject.addEventListener("click", () => sectionMake("Test Project"));
contentDOM.todayDate.innerHTML = `${d.getUTCDate()}. ${month} ${d.getFullYear()}`;

if (localStorage.getItem("testingList") != null) {
    contentDOM.testingList = JSON.parse(localStorage.getItem("testingList") || []);
    loadTasks("All Tasks");
}

sectionMake("All Tasks")

function sectionMake(sectionName) {
    contentDOM.sectionName.innerHTML = sectionName;
    loadTasks(sectionName);
}