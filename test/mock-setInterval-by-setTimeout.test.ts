import { interval } from '../src/common/index'

let res = interval(() => {
    console.log(1)
}, 1000);

setTimeout(() => {
    console.log(res.count);
    clearTimeout(res.timer);
}, 5000)