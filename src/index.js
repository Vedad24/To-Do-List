import "./style.css";
import "./dialog.css"
import { allTasks } from "./allTasks";
import { today } from "./today";
import { week } from "./week";
import { important } from "./important";
import { contentDOM } from "./DOMcache";
import { addItemsToLocalStorage, loadTasks } from "./newDialog";

const d = new Date();
const month = d.toLocaleString('default', { month: 'long' });

contentDOM.allSection.addEventListener("click", allTasks);
contentDOM.todazSection.addEventListener("click", today);
contentDOM.weekSection.addEventListener("click", week);
contentDOM.importantSection.addEventListener("click", important);
contentDOM.todayDate.innerHTML = `${d.getUTCDate()}. ${month} ${d.getFullYear()}`;

if (localStorage.getItem("testingList") != null) {
    contentDOM.testingList = JSON.parse(localStorage.getItem("testingList") || []);
    loadTasks("All Tasks");
}

allTasks();
/* if (!localStorage.getItem("testingList")) {
    console.log("empty");
}
else {
    contentDOM.testingList = JSON.parse(localStorage.getItem("testingList"));
    //addItemsToLocalStorage("All Tasks");
    addItemsToLocalStorage("All Tasks");
} */