export class SignUpInfo {
    fullname: string;
    username: string;
    email: string;
    phone: string;
    role: string[];
    password: string;

    constructor(fullname: string, username: string, email: string, phone: string, password: string) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.role = ['USER'];
    }
}
