fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        const container = document.querySelector(".main_chart");

        var highestIndex = 0;
        var highest = 0;

        for (let j = 0; j < data.length; j++) {
            const day = data[j];
            console.log(day.amount);
            if (day.amount > highest) {
                highest = day.amount;
                highestIndex = j;
            }
            console.log(highestIndex);
        }


        for (let i = 0; i < data.length; i++) {
            const days = data[i];
            
            const dayContain = document.createElement("div");

            const amount = document.createElement("div");
            amount.style = "height:" + days.amount/10*2 + "rem";
            amount.classList.add('main_bar');
            if (highest == days.amount) {
                amount.classList.add('highlight');
            }
            const day = document.createElement("p");
            day.innerText = days.day;
            day.classList.add('main_chart_day');

            
            dayContain.appendChild(amount);
            dayContain.appendChild(day);
            container.appendChild(dayContain);
            
        }   
    })

