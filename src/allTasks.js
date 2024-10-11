import { contentDOM } from "./DOMcache";

export function allTasks() {
    contentDOM.sectionName.innerHTML = "All Tasks";
    
    contentDOM.tasks.innerHTML = "";

    contentDOM.allItemTasks.forEach(task => {
        contentDOM.tasks.innerHTML +=
        `
            <div class="task">
                <div class="taskText">
                    <input type="checkbox" class="mark">
                    <p>${task.title}</p>
                </div>
                <div class="taskButtons">
                    <button class="edit"><i class="fa-solid fa-pen fa-lg" style="color: #000000;"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash fa-lg" style="color: #000000;"></i></button>
                </div>
            </div>
        `
    });
}