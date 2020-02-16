class Validator {
    constructor(userName) {
         this.userName = userName;
    }

    validateUsername(userName) {
        if (userName.search(/(^[^\d-_@.])+(\w)+([^\d-_@.])$/) == -1) {
             console.log('Wrong user name!');
        } else {
            return userName;
        }
    }
}

const newUser = new Validator();

console.log(newUser.validateUsername('mixazbubl'));