export class SignUpInfo {
    fullName: string;
    username: string;
    email: string;
    phone: string;
    role: string[];
    password: string;

    constructor(fullName: string, username: string, email: string, phone: string, password: string) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.role = ['USER'];
    }
}
