import { contentDOM } from "./DOMcache";
import { refreshTasks } from "./dialog";

export function important() {
    contentDOM.sectionName.innerHTML = "Important";
    refreshTasks(contentDOM.sectionName.innerHTML);
}