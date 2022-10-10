const index = require('./index.js')

const generateHeader = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>My Team</header>`
}
const generateManager = team => {
    return `
    <card class="cards">
    <section class="card-title">
    <p class="name">${managerPromptInput.name}</p>
    <p class="fa-solid fa-mug-hot"> Manager</p>
</section>
<section>
    <p class="id">ID: ${managerPromptInput.id}</p>
    <p class="email">Email: <a href="mailto:john@abc.com">${managerPromptInput.email}</a></p>
    <p class="officeNumber">Office Number: ${managerPromptInput.officeNumber}</p>
</section>`
.join('')
}

const generateIntern = team => { 
    if (employeePromptInput.role === 1 )
    return `
    <section class="card-title">
                <p class="name">${employeePromptInput.name}</p>
                <p class="fa-solid fa-user-graduate"> Intern</p>
            </section>
            <section>
                <p class="id">ID: ${employeePromptInput.id}</p>
                <p class="email">Email: <a href="mailto:john@abc.com"></a>${teamMemberInput.email}</p>
                <p class="school">School: ${employeePromptInput.school}</p>
            </section>`
.join('')
}

const generateEngineer = teamMembers => {
    if (employeePromptInput.role === 2)
    return `
    <section class="card-title">
                <p class="name"></p>
                <p class="fa-solid fa-glasses"> Engineer</p>
            </section>
            <section>
                <p class="id">ID: ${employeePromptInput.id} </p>
                <p class="email">Email: <a href="mailto:john@abc.com"></a>${teamMemberInput.email}</p>
                <p class="gitHub" href="https://github.com/${employeePromptInput.gitHub}" target="_blank" rel="noopener noreferrer" >GitHub</p>
            </section>
            `
            .join('')
}

const generateFooter = team => {
    return `
    </card>
    </main>
    </body>
    </html>`
}

module.exports = templateHelper; 