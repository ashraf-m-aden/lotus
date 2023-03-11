import { db, auth } from "../../db";

class AuthService {
  isloggedIn = "isLoggedIn";
  authToken = null;
  userProfile = null;
  tokenExpiry = null;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  // Login With Firebase
  login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async signUp(email: string, password: string) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (authResult) => {
        // this.tokenExpiry = new Date();
        // localStorage.setItem(loginExpiryKey, this.tokenExpiry);
        const user = {
          name: "",
          age: "",
          number: "",
          formations: [],
          profession: "",
          email: authResult.user?.email,
          id: authResult.user?.uid,
          role: "Student",
        };
        await db.collection("users").doc(user.id).set(user); // cree dans la collection users un document qui a cet id users.id avk les donné "user"
        await authResult.user?.sendEmailVerification();
        localStorage.setItem(this.isloggedIn, "true");
      });
  }

  async Logout() {
    await auth.signOut();
  }

  getUserData(userId: string) {
    return db.collection("users").doc(userId).get();
  }

  updateUser(userId: string, update: any) {
    return db.collection("users").doc(userId).update(update);
  }
  updatePassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }
}
export default new AuthService();
