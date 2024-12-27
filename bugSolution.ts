function greeter(person: string | string[]) {
    if (Array.isArray(person)) {
        return "Hello, " + person.join(", ");
    } else {
        return "Hello, " + person;
    }
}

let user = ["Jane Doe", "John Smith"];
let user2 = "Jane Doe";

console.log(greeter(user)); // Output: Hello, Jane Doe, John Smith
console.log(greeter(user2)); // Output: Hello, Jane Doe