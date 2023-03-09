let searchBtn = document.getElementById("search-btn")
let yearInp = document.getElementById("year-input")
let table = document.getElementsByClassName("table")

searchBtn.addEventListener("click", () => {
    let year = yearInp.value
    let finalURL = `http://ergast.com/api/f1/${year}/constructors.json`
    console.log(finalURL)

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            const drivers = data.MRData.ConstructorTable.Constructors
            drivers.forEach(element => {
                console.log(element.name)
            });
            buildTable(drivers)
        })

    

    function buildTable(data) {
        for (let i = 0; i < data.length; i++) {
            let row =   `<tr> 
                            <td>${data[i].name}</td>
                            <td>${data[i].nationality}</td>
                            <td>${data[i].url}</td>
                        <tr>`
            table[0].innerHTML += row
        }
    } 
});