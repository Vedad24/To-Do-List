import { contentDOM } from "./DOMcache";

export function populateStorage() {
    localStorage.setItem("taskList", JSON.stringify(contentDOM.allItemTasks));
}

export function dialogFunc() {
    document.querySelector(".addButton").addEventListener("click", function () { contentDOM.dialog.showModal(); });
    document.querySelector(".add-task").addEventListener("click", function () {
        if (!(document.querySelector("#task-title").value).trim().length) {
            contentDOM.labelTitle.style.color = "red";
            return;
        }
        contentDOM.labelTitle.style.color = "black";
        let t = {
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            dueDate: document.querySelector("#due").value,
            priority: document.querySelector("#task-priority").checked,
            type: document.querySelector("#taskType").value,
            finished: false,
            id: 0
        }
        contentDOM.allItemTasks.push(t);
        refreshTasks(contentDOM.sectionName.innerHTML);
        contentDOM.dialog.close();
        document.querySelector(".inputs").reset();
        populateStorage();
    });
}

export function refreshTasks(typeName) {
    contentDOM.tasks.innerHTML = "";
    let index = 0;
    contentDOM.allItemTasks.forEach(task => {
        task.id = index++;
        if (task.type != typeName && typeName != "All Tasks") {
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