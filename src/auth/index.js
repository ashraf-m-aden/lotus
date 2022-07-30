import EventEmitter from 'events';
const userlogin = 'islogged';
const loginExpiryKey = 'tokenExpiry';
const Userinfo = 'userinfo';
const localStorageKey = 'loggedIn';

class Auth extends EventEmitter {
    authToken = null
    userProfile = null
    tokenExpiry = null
        // Login With Firebase
    localLogin(authResult) {
        this.tokenExpiry = new Date();
        localStorage.setItem(loginExpiryKey, this.tokenExpiry);
        localStorage.setItem(userlogin, 'true');
        localStorage.setItem(localStorageKey, 'true');
        localStorage.setItem(Userinfo, JSON.stringify({
            displayName: authResult.user.displayName,
            email: authResult.user.email,
            photoURL: authResult.user.photoURL,
        }));
    }
    Logout() {
        localStorage.removeItem(loginExpiryKey);
        localStorage.removeItem(userlogin);
        localStorage.removeItem(Userinfo);
        localStorage.removeItem(localStorageKey);

    }

    isAuthenticated() {
        return (
            new Date(Date.now()) != new Date(localStorage.getItem(loginExpiryKey)) &&
            localStorage.getItem(userlogin) === 'true'
        );
    }
    isAuthenticatedUser() {
        return (
            new Date(Date.now()) < new Date(localStorage.getItem(loginExpiryKey)) &&
            localStorage.getItem(localStorageKey) === 'true'
        );
    }

}

export default new Auth();