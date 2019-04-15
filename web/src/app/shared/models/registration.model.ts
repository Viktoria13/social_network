export class RegistrationModel {
  public username: string;
  public email: string;
  public phone: string;
  public password: string;
  public confirmPassword: string;

  public toString() {
    return this.username + ' ' + this.email + ' ' + this.phone + ' ' + this.password;
  }
}
