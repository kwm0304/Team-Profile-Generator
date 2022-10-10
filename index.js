const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const team = []
//manager prompt name, id, email, officeNumber

    const managerPrompt = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "Please enter team manager's name:", 
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('Please enter name.');
                return false;
            }
        }
        },
        {
            type: 'number',
            name: 'employeeid',
            message: 'Manager id number:',
            validate: isNumber => {
                if (isNumber) {
                    return true;
                } else {
                    console.log('Please enter id number.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Team manager's email:",
            validate: isEmail => {
                if (isEmail) {
                    return true;
                } else {
                    console.log('Please enter valid email.')
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter manager's office number:"
        },
    ])
    .then((managerPromptInput) => {
        team.push(managerPromptInput);
        console.log(managerPromptInput);
    })
}
//all other employee's inq prompts confirmAdd, role, name, id, email, school or gitHub
const employeePrompt = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);
    return inquirer.prompt([
{
    type: 'confirm',
    name: 'addMore',
    message: 'Would you like to add another team member?',
    default: true
},
{
    type: 'list',
    name: 'role',
    message: 'New team member role: ',
    choices: [
        "Engineer",
        "Intern",
        "Done"
    ]
},
{
    type: 'input',
    name: 'employee name',
    message: "Employee name: "
},
{
    type: 'input',
    name: 'employeeid',
    message: 'Employee ID:'
},
{
    type: 'input',
    name: 'employee email',
    message: 'Employee email address: '
}
    ])
    //redirects to either engineer,intern or done question
    .then((employeePromptInput) => {
        if (employeePromptInput.role === 1) {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: "Intern's school: "
            }
        ])  
    } else if (employeePromptInput.role === 0) {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'gitHub',
                message: "Engineer's gitHub account: "
            }
        ])} else return team
    })

    .then((employeePromptInput) => {
        team.push(employeePromptInput);
        console.log(employeePromptInput);
    })
}

const writeFile = (answers) => {
    fs.writeFile('./dist/renderedoutput.html', answers, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}

managerPrompt()
    .then(employeePrompt)
    .then(team => {
        return templateHelper (team);
    })
    .then(renderedoutput => {
        return writeFile(renderedoutput);
    })
    .catch(err => {
        console.log(err)
    })
