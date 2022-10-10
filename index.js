const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const promptUser = () => {
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
            message: 'Team member id number:',
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
            message: 'Team member email:',
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
                "Intern"
            ]
        }
    ])
    .then((teamMemberInput) => {
        if (teamMemberInput.addMore === false) {
        return geneneratePage()
    } else if (teamMemberInput.role === 0) {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'gitHub',
                message: "Engineer's gitHub account: "
            }
        ])} else return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: "Intern's school: "
            }
        ])   
    })
    .then(teamMemberInput => {
        team.teamMembers.push(teamMemberInput)
        if (teamMemberInput.confirmAdddTeamMember) {
            return promptUser(team)
        } else {
            return (team)
        }
        
}),


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
    })
    
}
promptUser()}