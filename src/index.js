import "./style.css";
import { allTasks } from "./allTasks";
import { today } from "./today";

document.querySelector(".all").addEventListener("click", allTasks);
document.querySelector(".today").addEventListener("click", today);