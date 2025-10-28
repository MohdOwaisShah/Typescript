let username: string = "Owais";
let count: number = 42;
let isActive: boolean = true;
let anything: any = { x: 10 };    // “Opt-out” type: avoid if you can
let unknownValue: unknown = "hello";     // safer than `any`
console.log("username ",username)
console.log("count ",count)
console.log("isActive ",isActive)
console.log("anything ",anything)
console.log("unknownValue ",unknownValue)
console.log("Hello world")

// Tuples
let arr: [string, number] = ["owais", 12.4];

// Enum
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

UserRoles.ADMIN

// Any
let a: any;
a = "hello";
a = 123;
a = { name: "Alice" }