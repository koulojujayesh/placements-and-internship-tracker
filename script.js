let applications = JSON.parse(localStorage.getItem("apps")) || []

function displayData() {

    let tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = ""

    applications.forEach((app, index) => {

        let row = `
<tr>
<td>${app.company}</td>
<td>${app.role}</td>
<td>${app.type}</td>
<td>${app.status}</td>
<td><button class="delete" onclick="deleteApp(${index})">Delete</button></td>
</tr>
`

        tableBody.innerHTML += row

    })

}

function addApplication() {

    let company = document.getElementById("company").value
    let role = document.getElementById("role").value
    let type = document.getElementById("type").value
    let status = document.getElementById("status").value

    let app = {
        company: company,
        role: role,
        type: type,
        status: status
    }

    applications.push(app)

    localStorage.setItem("apps", JSON.stringify(applications))

    displayData()

    document.getElementById("company").value = ""
    document.getElementById("role").value = ""

}

function deleteApp(index) {

    applications.splice(index, 1)

    localStorage.setItem("apps", JSON.stringify(applications))

    displayData()

}

displayData()