"use strict";
function carMaintenance() {
    console.log("I leave my car at 9 in workshop");
    let car = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Car is fixed...");
            resolve("Your car is ready");
        }, 2000);
    });
    return car;
}
function pickDress() {
    let dress = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Dress is ready");
            resolve("pick your dress");
        }, 100);
    });
    return dress;
}
function attendEvent() {
    let event = new Promise((resolve, reject) => {
        console.log("Now you can attend the event");
        resolve("Now you can go home");
    });
    return event;
}
function BacktoHome() {
    let home = new Promise((resolve, reject) => {
        console.log("towards home");
        reject("Now you can not go to home");
    });
    return home;
}
let calling = carMaintenance();
calling.then((aa) => {
    console.log("Finally", aa);
    return pickDress();
}).then((bb) => {
    console.log("Finally 1.", bb);
    return attendEvent();
}).then((cc) => {
    console.log("Finally", cc);
    return BacktoHome();
}).catch((dd) => {
    console.log("oh oh can  not relove promise", dd);
});
