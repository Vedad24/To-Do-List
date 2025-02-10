import { contentDOM } from "./DOMcache";
import { addItemsToLocalStorage, loadTasks } from "./newDialog";


export function allTasks() {
    let name = "All Tasks";
    contentDOM.sectionName.innerHTML = name;
    loadTasks(name);
}