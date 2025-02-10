import { contentDOM } from "./DOMcache";
import { addItemsToLocalStorage, loadTasks } from "./newDialog";

export function today() {
    contentDOM.sectionName.innerHTML = "Today";
    loadTasks("Today");
}
