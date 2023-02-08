fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);

        const container = document.querySelector(".main_chart");

        for (let i = 0; i < data.length; i++) {
            const days = data[i];
            

            const dayContain = document.createElement("div");

            const amount = document.createElement("div");
            amount.style = "height:" + days.amount/10*2 + "rem";
            amount.classList.add('main_bar');

            const day = document.createElement("p");
            day.innerText = days.day;
            day.classList.add('main_chart_day');

            dayContain.appendChild(amount);
            dayContain.appendChild(day);
            container.appendChild(dayContain);
        }
    })

