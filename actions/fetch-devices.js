function fetchDevices() {
    const dataTable = document.getElementById("table")
    let data = [
        "HPEB0001",
        "HPEB0002",
        "HPEB0003",
        "HPEB0004",
        "HPEB0005",
        "HPEB0006",
        "HPEB0007",
        "HPEB0008",
        "HPEB0009",
        "HPEB0010",
        "HPEB0011",
        "HPEB0012",
        "HPEB0013",
        "HPEB0014",
        "HPEB0015",
        "HPEB0016",
        "HPEB0017",
        "HPEB0018",
        "HPEB0019",
        "HPEB0020",
        "HPEB0021",
        "HPEB0022",
        "HPEB0023",
        "HPEB0024",
        "HPEB0025",
        "HPEB0026",
        "HPEB0027",
        "HPEB0028"
    ]
    let HTMLelements = []
    let idCounter = 0;
    for (i in data) {
        HTMLelements.push(`<td><input name="${idCounter}" type="checkbox"></td><td>HP Elitebook 840 G7</td><td>${data[i]}</td><td>5cghtg2137</td>`)
    }
    idCounter = 0
    HTMLelements.forEach(item => {
        let row = document.createElement('tr')
        row.setAttribute("id", `device-row-${idCounter}`)
        row.innerHTML = item
        dataTable.appendChild(row)
        idCounter++
    })

}