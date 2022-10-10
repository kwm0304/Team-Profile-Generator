const index = require('./index.js')

const generateHeader = teamMembers => {
    return `<header>My Team</header>`
}
const generateManager = teamMembers => {
    return `
    <section class="card-title">
    <p class="name">${teamMemberInput.name}</p>
    <p class="fa-solid fa-mug-hot"> Manager</p>
</section>
<section>
    <p class="id">ID: ${teamMemberInput.id}</p>
    <p class="email">Email: ${teamMemberInput.email}</p>
    <p class="officeNumber">Office Number: ${teamMemberInput.officeNumber}</p>
</section>`
.join('')
}

const generateIntern = teamMembers => {
    return `
    <section class="card-title">
                <p class="name">${teamMemberInput.name}</p>
                <p class="fa-solid fa-user-graduate"> Intern</p>
            </section>
            <section>
                <p class="id">ID: ${teamMemberInput.id}</p>
                <p class="email">Email: ${teamMemberInput.email}</p>
                <p class="school">School: ${teamMemberInput.school}</p>
            </section>`
.join('')
}

const generateEngineer = teamMembers => {
    return `
    <section class="card-title">
                <p class="name"></p>
                <p class="fa-solid fa-glasses"> Engineer</p>
            </section>
            <section>
                <p class="id">ID: ${teamMemberInput.id} </p>
                <p class="email">Email: ${teamMemberInput.email}</p>
                <p class="gitHub" href="https://github.com/${teamMemberInput.gitHub}" >GitHub</p>
            </section>`
            .join('')
}