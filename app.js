const response = await fetch('data.json');
const data = await response.json();

const container = document.querySelector(.main_chart);

for (let i = 0; i < data.length; i++) {

    const dayContain = document.createElement("div");

    const amount = document.createElement("div");
    amount.style = "height:" + data.amount/10 + "rem";
    amount.classList.add

    const day = document.createElement("p");
    day.innerText = data.day;
}