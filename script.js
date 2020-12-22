const yearOne = document.getElementById("year-one");
const yearTwo = document.getElementById("year-two");
const button = document.querySelector(".btn");
const datesList = document.querySelector(".dates-list");

button.addEventListener("click", (e) => {
    fridayTheThirteens(yearOne.value, yearTwo.value);
});

function fridayTheThirteens(start, end=start) {
    let friday13ths = [];
    datesList.innerHTML = "";

    for (let year = start; year <= end; year++) {
        for (let month = 0; month < 12; month++) {
            let d = new Date(year, month, 13);
            if (d.getDay() == 5) {
                friday13ths.push(`13/${month+1}/${year}`);
            }
        }
    }

    friday13ths.forEach((e) => {
        let paragraphDate = document.createElement("p");
        let text = document.createTextNode(`${e}`);
        paragraphDate.appendChild(text);
        datesList.appendChild(paragraphDate);
    });
}