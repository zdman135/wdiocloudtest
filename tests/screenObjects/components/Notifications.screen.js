import BaseScreen from '../Base.screen';

class NotificationsScreen extends BaseScreen {
    constructor () {
        super()
    }

    get DontAllowButton () {
        return $("~Don’t Allow");
    }

    disableDebugNotifications() {
        this.DontAllowButton.click()
    }

}

export default new NotificationsScreen();
