import { contentDOM } from "./DOMcache";

export function dialogFunc() {
    document.querySelector(".addButton").addEventListener("click", function () { contentDOM.dialog.showModal(); });
    document.querySelector(".add-task").addEventListener("click", function () {
        document.querySelector("#task-title").value;
        let t = {
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            dueDate: document.querySelector("#due").value,
            priority: document.querySelector("#task-priority").checked
        }
        console.log(t);
        contentDOM.dialog.close();
        document.querySelector(".inputs").reset();
    });
}
