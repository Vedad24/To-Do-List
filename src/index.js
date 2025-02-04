import "./style.css";
import "./dialog.css"
import { allTasks } from "./allTasks";
import { today } from "./today";
import { week } from "./week";
import { important } from "./important";
import { contentDOM } from "./DOMcache";
import { dialogFunc } from "./dialog";
import { refreshTasks } from "./dialog";

const d = new Date();
const month = d.toLocaleString('default', { month: 'long' });

allTasks();
dialogFunc();

contentDOM.allSection.addEventListener("click", allTasks);
contentDOM.todazSection.addEventListener("click", today);
contentDOM.weekSection.addEventListener("click", week);
contentDOM.importantSection.addEventListener("click", important);
contentDOM.todayDate.innerHTML = `${d.getUTCDate()}. ${month} ${d.getFullYear()}`;

/* document.querySelector(".all").addEventListener("click", function () {
    console.log(contentDOM.allItemTasks);
}); */

//hello world

if (!localStorage.getItem("taskList")) {
    console.log("empty");
}
else {
    contentDOM.allItemTasks = JSON.parse(localStorage.getItem("taskList"));
    refreshTasks("All Tasks")
}