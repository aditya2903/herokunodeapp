// import { Observable } from 'rxjs';
// const css = require('style.css');
//import "./style.css";
// require("style-loader!css-loader!./style.css")


// import { tripleMe } from './tripleMe';


// const peoplejs = require('./people.js');
// console.log("hello aditya");

// console.log(peoplejs.testalert);

// if (4 % 2 === 0) {
//     // using dynamic import below, dynamic import in es returns a promise and can be used in an if statement unlike the normal import
//     import("./tripleMe").then(() => {
//         console.log(tripleMe(10));
//     });
// }

// abstract class myAbstractClassA {
//     x: string;
//     constructor() {

//     }
//     abstract abstractMethodA(nameStr: string): string;
//     nonAbstractMethodB() {
//         console.log(this.x);
//     }
// }

// class myClassB extends myAbstractClassA {
//     empCode: any;
//     constructor() {
//         super();
//     }
//     abstractMethodA(nameStr: string): string {
//         return nameStr;
//     }
//     nonAbstractMethodB() {
//         return 1;
//     }
// }
// let myClassBObj = new myClassB();
// console.log(myClassBObj.abstractMethodA("Aditya"));

// // type union in typescript is below
// type Point = number | string;



// interface Employee1 {
//     id: number;
//     name: string;
// }

// interface Employee2 {
//     email: string;
//     contactNumber: string;
// }
// // below is type intersection in typescript
// type intersect1 = Employee1 & Employee2;

// var intersectVar: intersect1 = {
//     name: 'test',
//     id: 1,
//     email: 'test@test.test',
//     contactNumber: '+1 123 456 7890'
// }

// console.log(intersectVar);

// class UserService {
//     sayHi() {
//         console.log("Hi there!!");
//     }
// }

// class myComponent {
//     constructor(private user: UserService) {
//     }
// }

// class Injector {
//     public _container = new Map();
//     get(service: any) {
//         const serviceInstance = this._container.get(service);
//         if (!serviceInstance) {
//             throw Error("No provider found");
//         }
//         return serviceInstance
//     }

// }

// var injectorObj = new Injector();
// console.log(injectorObj._container);

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged', () => {
//     console.log('listener called');
// });
// emitter.emit('messageLogged');
// console.log(EventEmitter)


// const util = require('util');
// console.log(util);

// async function fn() {
//     return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err: any, ret: any) => {
//     if (err) throw err;
//     console.log(ret);
// });

// chaining promises below - one promise after the other
// new Promise((resolve, reject) => {
//     if (true) {
//         resolve({
//             name: 'Marketing meeting',
//             location: 'Skype',
//             time: '1:00 pm'
//         });
//     } else {
//         reject(new Error('Meeting already scheduled'));
//     }
// })
//     .then((res1) => {
//         console.log(res1);
//         return new Promise((res, rej) => {
//             res(`${res1.name} is at ${res1.location} at ${res1.time}`);
//         })
//     })
//     .then((resolve) => {
//         console.log(resolve)
//     }).catch((error) => {
//         console.log(error);
//     });

// using callback sample below


// function loginUser(email, password, callback) {
//     setTimeout(() => {
//         callback({ userEmail: email });
//     }, 3000);
// }

// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback([email, "video1", "video2", "video3"]);
//     }, 2000);
// }

// const user = loginUser('adisharma2903@gmail.com', 123456, (param) => {
//     console.log(param);
//     getUserVideos(param.userEmail, (param2) => console.log(param2));
// });

// console.log('Synchronous 1');
// let i1 = 0;
// let codeblocker = new Promise((resolve, reject) => {
//     resolve('large number of while loops done');
//     reject('promise error block');
// });

// codeblocker.then((res) => {
//     while (i1 <= 1000000000) { i1++; }
//     console.log(res)
// });

// console.log('Synchronous 2');

//use async await code below

// const getFruit = async (name: any) => {
//     const fruits = {
//         'pineapple': 'pineapplevalue',
//         'peach': 'peachvalue',
//         'strawberry': 'strawberryvalue'
//     };
//     setTimeout(() => {
//         return 'gghgcfx';
//     }, 1000);

// };

// getFruit('peach').then((res) => {
//     console.log(res);
// });


// let makeSmoothie = async () => {
//     const a = await getFruit('pineapple');
//     const b = await getFruit('strawberry');

//     return Promise.all([a, b]);
// };

// makeSmoothie().then((res) => {
//     console.log(res);
// });

// const makeSmoothie2 = (param) => {
//     const a = getFruit('pineapple');
//     const b = getFruit('strawberry');

//     return [a, b];
// };

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });
//     let result = await promise; // wait until the promise resolves (*)
//     console.log(result); // "done!"
// }

// f();

// {Object} => Iterator => Generator
let characters = ['Finn', 'Poe', 'Ray', 'Kylo', 'Luke', 'Leia'];
// function* generatorFnTest() {
//     let i = 0;
//     while (i < 8) {
//         if (i === 4) {
//             return;
//         }
//         yield characters[i];
//         i++;
//     }
// }
// const x = generatorFnTest();
// for (let y = 0; y < 8; y++) {
//     console.log(x.next());
// }
// console.log(x.next());

let starwars8 = {
    title: 'The last jedi',
    director: 'Rian Johnson',
    year: 2017,
    boxOffice: '1:30pm'
};
let count = -1;
let SW8 = {
    [Symbol.iterator]: function () {
        return {
            next: () => {
                count++;
                switch (count) {
                    case 0: {
                        return {
                            value: starwars8.title,
                            done: false
                        }
                    }
                }
            }
        }
    }
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


const library2Property = uuidv4();
function lib2tag(obj) {
    Object.defineProperty({}, 'gdffg', {
        value: 369
    });
}

const user = {
    name: 'Thomas Hunter II',
    age: 32
};
var test = Object.defineProperty({}, 'bdbfg', {
    value: 369,
    enumerable: false
});
// console.log('test', test);

const orig = { p: 7 }
const handler = {
    get: (target, prop, receiver) => {
        console.log('target', target);
        // target === orig
        // receiver === proxy || receiver === child
        return prop in target ? target[prop] + 1 : Infinity
    }
}
// const proxy = new Proxy(orig, handler);
// console.log(orig.p) // 7
// console.log('test1');
// console.log(proxy.p) // 8

// const fs = require('fs');

// fs.readdir('./', function (err, succ) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', succ);
//     }

// });

const http = require('http');
const users = [
    { name: 'aditya', id: 1 },
    { name: 'amit', id: 2 },
    { name: 'aakash', id: 3 }
];
const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(JSON.stringify(users));
    }
    res.end();
});

server.on('connection', function () {
    console.log('connection');
});

server.listen(3000);

console.log('Listening to port 3000...');

// const os = require('os');

// console.log(os.uptime());

// const url = require('url');

// const myUrl = new URL('http://www.google.com/home/index?id=100&status=active');

// console.log(myUrl);

// const logger = require('./logger.js');

// const loggerObj = new logger();

// loggerObj.on('message', function (data) {
//     console.log(data);
// });

// loggerObj.log('message 1');

// loggerObj.log('lorem ipsum');
// console.log(process.env.PORT);