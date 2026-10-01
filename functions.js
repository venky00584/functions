// Basic functions
//1
function hello(){
    
    console.log("Hello everyone");
}
hello();

//2
function welcome(js){
    console.log(js);
}
welcome("Welcome to JavaScript");

//3
function navi(){
    console.log("venkat sai");

}
navi();

//4
function message() {
    console.log("Hello everyone");
    console.log("Welcome to JavaScript");
    console.log("This is a simple message");
}
message();

//5
function numbers(){
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
numbers();

//6
function check(){
    if (true){
        console.log("Condition is true");
    }
}
check();

//7
function details(name,qualification,role){
    console.log("Name: " + name);
    console.log("Qualification: " + qualification);
    console.log("Role: " + role);
}
details("Venkat Sai", "B.Tech", "Software Engineer");

//8
function company(companyName){
    console.log("Company Name: " + companyName);
}
company("Stackly");

//9
function welcomeUser(userName){
    console.log("venkat sai" +" "+ userName);
}
welcomeUser("pannirasa");
welcomeUser("pannirasa");
welcomeUser("pannirasa");

//10
function one(){
    console.log("This is function one");

}
function two(){
    console.log("This is function two");

}
one();
two();

///Parameters & Arguments

// 11
function message(text) {
    console.log(text);
}

message("Hello Everyone");


// 12
function details(name, age) {
    console.log(name);
    console.log(age);
}

details("Venkat", 22);


// 13
function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// 14
function sub(a, b) {
    console.log(a - b);
}

sub(20, 10);


// 15
function multiply(a, b) {
    console.log(a * b);
}

multiply(10, 5);


// 16
function divide(a, b) {
    console.log(a / b);
}

divide(20, 5);


// 17
function student(name, age) {
    console.log(name);
    console.log(age);
}

student("Venkat", 22);


// 18
function employee(name, role, salary) {
    console.log(name);
    console.log(role);
    console.log(salary);
}

employee("Venkat", "Developer", 40000);


// 19
function person(name, age, city, college) {
    console.log(name);
    console.log(age);
    console.log(city);
    console.log(college);
}

person("Venkat", 22, "Nellore", "SRM University");


// 20
function information(name, age, city, college, course, role) {
    console.log(name);
    console.log(age);
    console.log(city);
    console.log(college);
    console.log(course);
    console.log(role);
}

information("Venkat", 22, "Nellore", "SRM University", "B.Tech", "Developer");


// Default Parameters

// 21
function studentDetails(name, department = "CSE", cgpa) {
    console.log(name);
    console.log(department);
    console.log(cgpa);
}

studentDetails("Venkat", undefined, 8.5);


// 22
function user(name, age = 18) {
    console.log(name);
    console.log(age);
}

user("Venkat");


// 23
function employeeDetails(name, role = "Developer") {
    console.log(name);
    console.log(role);
}

employeeDetails("Venkat");


// 24
function form(name, department, cgpa, disability = "no") {
    console.log(name);
    console.log(department);
    console.log(cgpa);
    console.log(disability);
}

form("Venkat", "CSE", 8.5);
form("Rahul", "ECE", 8.0, "yes");


// 25
function course(name, duration, mode = "Online") {
    console.log(name);
    console.log(duration);
    console.log(mode);
}

course("JavaScript", "3 Months");


// Return

// 26
function addition(a, b) {
    return a + b;
}

let result1 = addition(10, 20);
console.log(result1);


// 27
function subtraction(a, b) {
    return a - b;
}

let result2 = subtraction(20, 10);
console.log(result2);


// 28
function multiplication(a, b) {
    return a * b;
}

let result3 = multiplication(10, 5);
console.log(result3);


// 29
function division(a, b) {
    return a / b;
}

let result4 = division(20, 5);
console.log(result4);


// 30
function salary() {
    return 40000;
}

let mySalary = salary();
console.log(mySalary);


// 31
function employeeSalary(salary) {
    return salary;
}

let salaryValue = employeeSalary(45000);
console.log(salaryValue);


// 32
function personName() {
    return "Venkat Sai";
}

let myName = personName();
console.log(myName);


// 33
function result(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(result(50));


// 34
function discount(price, discount) {
    return price * (discount / 100);
}

console.log(discount(1000, 20));


// 35
function calculate(a, b) {
    return a + b;
}

function showResult(value) {
    console.log(value);
}

let answer = calculate(10, 20);
showResult(answer);


// Outer Scope

// 36
let name = "Venkat";

function showName() {
    console.log(name);
}

showName();


// 37
let employeeInfo = {
    name: "Venkat",
    designation: "Developer"
};

function showEmployee() {
    console.log(employeeInfo.name);
    console.log(employeeInfo.designation);
}

showEmployee();


// 38
let employeeSalaryValue = 40000;

function addBonus() {
    let bonus = 5000;
    console.log(employeeSalaryValue + bonus);
}

addBonus();


// 39
let employeeData = {
    name: "Venkat",
    role: "Python Developer",
    salary: 40000
};

function showData() {
    console.log(employeeData.name);
    console.log(employeeData.role);
    console.log(employeeData.salary);
}

showData();


// 40
let city = "Nellore";

function firstFunction() {
    console.log(city);
}

function secondFunction() {
    console.log(city);
}

firstFunction();
secondFunction();


// Named, Anonymous & Arrow Functions

// 41
function namedFunction(name) {
    console.log(name);
}

namedFunction("Venkat");


// 42
let anonymousFunction = function(name) {
    console.log(name);
};

anonymousFunction("Venkat");


// 43
let arrowFunction = (name) => {
    console.log(name);
};

arrowFunction("Venkat");


// 44
let addNumbers = (a, b) => {
    console.log(a + b);
};

addNumbers(10, 20);


// 45
function namedAdd(a, b) {
    console.log(a + b);
}

let anonymousAdd = function(a, b) {
    console.log(a + b);
};

let arrowAdd = (a, b) => {
    console.log(a + b);
};

namedAdd(10, 20);
anonymousAdd(10, 20);
arrowAdd(10, 20);


// IIFE

// 46
(function() {
    console.log("Hello JavaScript");
})();


// 47
(function(name) {
    console.log("Hello " + name);
})("Venkat");


// 48
(function(product, discount) {
    console.log(product + " has a special offer of " + discount + "% discount");
})("Laptop", 20);


// Callback & Higher-Order Functions

// 49
function addNumbersWithCallback(callback, a, b) {
    console.log(a + b);
    callback(20, 10);
}


// 50
function subNumbers(a, b) {
    console.log(a - b);
}

addNumbersWithCallback(subNumbers, 10, 20);