class Customer {
    private firstName: string;
    private lastName: string;

    // Constructor now takes first and last name as parameters
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(): string {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}

let customer = new Customer("Jane", "Smith");
console.log(customer.greeter());
