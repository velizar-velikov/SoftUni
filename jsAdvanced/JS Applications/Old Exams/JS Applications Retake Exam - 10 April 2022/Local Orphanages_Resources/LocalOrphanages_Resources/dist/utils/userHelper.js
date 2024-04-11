const userItem = 'userData';
class UserHelper {
    getUserData() {
        return JSON.parse(sessionStorage.getItem(userItem));
    }
    setUserData(data) {
        sessionStorage.setItem(userItem, JSON.stringify(data));
    }
    clearUserData() {
        sessionStorage.removeItem(userItem);
    }
}
// singleton pattern
export default new UserHelper();
