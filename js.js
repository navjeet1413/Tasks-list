var addTaskBtn = document.getElementById("addTaskBtn");
var taskInput = document.getElementById("taskInputContainer");
var addItemBtn = document.getElementById("addItemBtn");
var itemInput = document.getElementById("itemInputContainer");
var closeTaskInput = document.getElementById("closeTaskInput");
var closeItemInput = document.getElementById("closeItemInput");
var cardContainer = document.getElementById("cardContainer");
var noTasks = document.getElementById("noTasks");

function openAddTask() {
    taskInput.style.visibility = "visible";
}

function closeAddTask() {
    taskInput.style.visibility = "hidden";
}

function getTask() {
    var task = document.getElementById("task");
    var res = task.value;
    task.value = "";
    return res;
}

function getItem() {
    var item = document.getElementById("item");
    var res = item.value;
    item.value = "";
    return res;
}

function openAddItem(card) {
    itemInput.style.visibility = "visible";
    addItemBtn.addEventListener("click", () => addItem(card));
}

function closeAddItem() {
    var newBtn = `
    <button class="btn" id="addItemBtn">+ Add Item</button>
    `;
    addItemBtn.parentElement.innerHTML = newBtn;
    addItemBtn = document.getElementById("addItemBtn");
    itemInput.style.visibility = "hidden";
}

function addItem(card) {
    var currentTask = card.parentElement;
    var itemContainer = currentTask.getElementsByClassName("itemContainer")[0];

    var item = document.createElement("div");
    item.className = "item";
    var itemContent = `
            <input type="checkbox" id="">
            <span>${getItem()} &nbsp;</span>
        `;
    item.innerHTML = itemContent;
    itemContainer.appendChild(item);

    item.querySelector("input").addEventListener("click", () => removeItem(item));

    closeAddItem();
}

function removeItem(item) {
    item.querySelector("input").disabled = true;
    item.querySelector("span").classList.add("strike");
}

function addTask(title) {
    var card = document.createElement("div");
    card.className = "card";
    var cardContent = `
    <div class="cardHeading blue">
        <p>${title}</p>
    </div>
    <div class="itemContainer">
    </div>
`;
    card.innerHTML = cardContent;
    cardContainer.appendChild(card);

    var card = document.querySelectorAll(".cardHeading");
    card = card[card.length-1];
    card.addEventListener("click", () => openAddItem(card));
    noTasks.style.display = "none";
}

document.getElementById("addTask").addEventListener("click", openAddTask);
closeTaskInput.addEventListener("click", closeAddTask);

closeItemInput.addEventListener("click", closeAddItem);

addTaskBtn.addEventListener("click", function () {
    addTask(getTask());
    closeAddTask();
    task.value = "";
})