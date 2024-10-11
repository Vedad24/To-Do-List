import { contentDOM } from "./DOMcache";
import { refreshTasks } from "./dialog";

export function today() {
    contentDOM.sectionName.innerHTML = "Today";
    refreshTasks(contentDOM.sectionName.innerHTML);
}
