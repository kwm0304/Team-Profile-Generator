function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;

    Engineer.prototype.getName = function() {

    };

    Engineer.prototype.getId = function() {

    };

    Engineer.prototype.getEmail = function() {

    };
    // Overridden to return 'Engineer'
    Engineer.prototype.getRole = function() {
        return Engineer
    };
    
    Engineer.prototype.getGitHub = function() {

    };
}

module.exports = Engineer;