import { contentDOM } from "./DOMcache";
//import { refreshTasks } from "./dialog";
import { addItemsToLocalStorage, loadTasks } from "./newDialog";


export function allTasks() {
    let name = "All Tasks";
    contentDOM.sectionName.innerHTML = name;
}