import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    const decoded = jwtDecode(token);
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = localStorage.getItem("authToken");
    return !!token;
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const decoded = jwtDecode(token);

    const validDuration = 1000 * 60 * 60 * 24 * 30; // 30 days

    return (decoded.iat || 0) + validDuration < Date.now();
  }

  getToken(): string {
    // TODO: return the token
    const token = localStorage.getItem("authToken");

    if (!token) {
      this.logout();
      window.location.href = "/login";
      throw new Error("Login Token does not exist");
    }

    return token;
  }

  login(idToken: string) {
    // set the token to localStorage
    localStorage.setItem("authToken", idToken);
    //  redirect to the home page
    window.location.href = "/";
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem("authToken");
    // TODO: redirect to the login page
    window.location.href = "/";
  }
}

export default new AuthService();
