import { contentDOM } from "./DOMcache";
import { refreshTasks } from "./dialog";
import { addItemsToLocalStorage, loadTasks } from "./newDialog";

export function week() {
    contentDOM.sectionName.innerHTML = "Week";

}