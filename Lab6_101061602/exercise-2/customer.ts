class Customer {
    firstName: string;
    lastName: string;

    constructor() {
        this.firstName = "John";
        this.lastName = "Doe";
    }

    greeter(): string {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}

// Create an instance of Customer and call the greeter method
let customer = new Customer();
console.log(customer.greeter());
