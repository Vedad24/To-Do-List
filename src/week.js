import { contentDOM } from "./DOMcache";
import { refreshTasks } from "./dialog";

export function week() {
    contentDOM.sectionName.innerHTML = "Week";
    refreshTasks(contentDOM.sectionName.innerHTML);
}