import "./style.css";
import "./dialog.css"
import { allTasks } from "./allTasks";
import { today } from "./today";
import { important } from "./important";
import { contentDOM } from "./DOMcache";

const d = new Date();
const month = d.toLocaleString('default', { month: 'long' });

allTasks();

let dialog = document.querySelector("#dialog");

dialog.showModal();

document.querySelector(".all").addEventListener("click", allTasks);
document.querySelector(".today").addEventListener("click", today);
document.querySelector(".important").addEventListener("click", important);

contentDOM.todayDate.innerHTML = `${d.getDay()}. ${month} ${d.getFullYear()}`;