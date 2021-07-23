import BaseScreen from './Base.screen';

class LoginScreen extends BaseScreen {
    constructor () {
        super();
    }

    get username () {
        return $('~Username');
    }

    get password () {
        return $('~Password');
    }

    get signIn () {
        return $('~Sign In');
    }

    login (username, password) {
        this.username.setValue(username)
        this.password.setValue(password)
        this.signIn.click()
    }
}

export default new LoginScreen();
