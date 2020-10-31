/**
 * Authenticable = has method "authenticate"
 * Duck Type = It doesn't matter the type just if there's the methods | properties
 */

export class AuthSystem {
  static login(authenticable, password) {
    if (AuthSystem.isAuthenticable(authenticable)) {
      return authenticable.authenticate(password);
    }
    return false;
  }

  static isAuthenticable(authenticable) {
    return (
      "authenticate" in authenticable &&
      authenticable.authenticate instanceof Function
    );
  }
}
