import { contentDOM } from "./DOMcache";
import { addItemsToLocalStorage, loadTasks } from "./newDialog";

export function week() {
    contentDOM.sectionName.innerHTML = "Week";
    loadTasks("Week");
}