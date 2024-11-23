import { contentDOM } from "./DOMcache";
import { refreshTasks } from "./dialog";
import { populateStorage } from "./dialog";

export function important() {
    contentDOM.sectionName.innerHTML = "Important";
    contentDOM.tasks.innerHTML = "";
    let index = 0;
    contentDOM.allItemTasks.forEach(task => {
        task.id = index++;
        if (task.priority != true) {
            return;
        }
        contentDOM.tasks.innerHTML +=
            `
            <div class="task ${task.priority}">
                <div class="taskText">
                    <input type="checkbox" class="mark" data-id="${task.id}" ${task.finished ? 'checked' : ''}>
                    <p style="${task.finished ? 'text-decoration: line-through; color: gray' : ''}" >${task.title}</p>
                </div>
                <div class="taskButtons">
                    <button class="edit"><i class="fa-solid fa-pen fa-lg" style="color: #000000;"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash fa-lg" style="color: #000000;"></i></button>
                </div>
            </div>
        `;
    });

    document.querySelectorAll(".mark").forEach(mark => mark.addEventListener("click", function () {
        let indexForSearch = mark.getAttribute("data-id");
        let foundTask = contentDOM.allItemTasks.find(task => task.id == indexForSearch);
        if (mark.checked == true) {
            foundTask.finished = true;

            mark.nextElementSibling.style.textDecoration = "line-through";
            mark.nextElementSibling.style.color = "gray";
        }
        else {
            foundTask.finished = false;

            mark.nextElementSibling.style.textDecoration = "none";
            mark.nextElementSibling.style.color = "black";
        }
        populateStorage();
    }))
}