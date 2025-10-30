var username = "Owais";
var count = 42;
var isActive = true;
var anything = { x: 10 }; // “Opt-out” type: avoid if you can
var unknownValue = "hello"; // safer than `any`
console.log("username ", username);
console.log("count ", count);
console.log("isActive ", isActive);
console.log("anything ", anything);
console.log("unknownValue ", unknownValue);
console.log("Hello world");
// Tuples
var arr = ["owais", 12.4];
// Enum
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN;
// Any
var a;
a = "hello";
a = 123;
a = { name: "Alice" };