const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const cards = document.querySelector(".cards");



let data = [];
const render = () => {
    cards.innerHTML = data
        .map(
            (item, index) => `
    <div class=" border border-red-500 p-4 rounded-md">
      <h1 class="font-bold text-[32px]">${item.first_name}</h1>
      <p>${item.phone_number}</p>
      <button onclick="editItem(${item.id})" class="bg-green-500">edit</button>
      <button onclick="deleteItem(${index})" class="bg-red-500">delete</button>
    </div>
    `
        )
        .join("");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        id: Math.random(100 * 10)
    };
    for (let i of inputs) {
        obj[i.name] = i.value;
        i.value = "";
    }
    data.push(obj);
    render();
});

const deleteItem = (id) => {
    data = data.filter((item, index) => index !== id);
    render();
};
const editItem = (id) => {
    const first_name = prompt("first_name");
    const phone_number = prompt("phone_number");
    data = data.map((item) => item.id === id ? { first_name, phone_number, id } : item);
    render();
}

