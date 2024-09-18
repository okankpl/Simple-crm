export class User {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.id = obj?.id || '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : null; // Oder 0, wenn das sinnvoller ist
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : null; // Oder 0, wenn das sinnvoller ist
        this.city = obj ? obj.city : '';
        this.email = obj? obj.email : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email
        }
    }
}
