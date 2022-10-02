function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

    Intern.prototype.getName = function() {

    };

    Intern.prototype.getId = function() {

    };

    Intern.prototype.getEmail = function() {

    };
// Overridden to return 'Intern'
    Intern.prototype.getRole = function() {

    };

    Intern.prototype.getSchool = function() {

    };
}

module.exports = Intern;