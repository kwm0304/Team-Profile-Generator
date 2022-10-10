function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;

    Manager.prototype.getName = function() {
        return this.name;
    };

    Manager.prototype.getId = function() {
        return this.id;
    };

    Manager.prototype.getEmail = function() {
        return this.email;
    };
// Overridden to return 'Manager'
    Manager.prototype.getRole = function() {
        return Manager
    };
}

module.exports = Manager;