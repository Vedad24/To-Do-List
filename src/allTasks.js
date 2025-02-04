import { contentDOM } from "./DOMcache";
import { refreshTasks } from "./dialog";

export function allTasks() {
    contentDOM.sectionName.innerHTML = "All Tasks";
    refreshTasks(contentDOM.sectionName.innerHTML);
}