export default {
    ifequal(a, b, options) {
        if (a == b) {
            return options.fn(this);
        }
        return options.inverse(this);
    },
    getFullNameCharacter(firstname, lastname) {
        if (firstname && lastname && typeof firstname === 'string' && typeof lastname === 'string') {
            return firstname.charAt(0) + lastname.charAt(0);
        } else {
            console.error('Invalid firstname or lastname:', firstname, lastname);
            return '';
        }
    }
}


