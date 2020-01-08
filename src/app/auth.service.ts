export class AuthService {
  private isLoggedIn = false;

  isAuthenticated() {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 2000);
    // });
    return this.isLoggedIn;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}