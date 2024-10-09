export function allTasks() {
    let content = document.querySelector(".content");
    content.innerHTML = "";
    content.innerHTML = `
    <div class="todoName">
            <h1>All Tasks</h1>
        </div>
        <div class="date">
            <h1 class="todayDate">6. October</h1>
            <h2>20 Tasks Left</h2>
        </div>
        <div class="tasks">
        </div>`;
}