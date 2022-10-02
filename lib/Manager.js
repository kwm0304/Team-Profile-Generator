function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;

    Manager.prototype.getName = function() {

    };

    Manager.prototype.getId = function() {

    };

    Manager.prototype.getEmail = function() {

    };
// Overridden to return 'Manager'
    Manager.prototype.getRole = function() {

    };
}

module.exports = Manager;