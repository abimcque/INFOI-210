const wrapper = document.querySelector('#wrapper');
const form = document.querySelector('#form');

const list = [
    {
        name: "Latte - $4.50"
    },
    {
        name: "Cappucino - $3.50"
    },
    {
        name: "Frappucino - $5.50"
    }
];

function renderItems() {
    form.innerHTML = "";
    list.forEach((item, idx) => {
        const ele = document.createElement("div");
        const header = document.createElement("h1");
        const title = document.createElement("h2");
        ele.appendChild(header);
        ele.appendChild(title);
        wrapper.appendChild(ele);
    })
}

renderItems();

document.getElementById("orderNow").addEventListener("click", () => {
    const obj ={
        name: (document.getElementById("name").value)
    }
    list.push(obj);
    renderItems();
});