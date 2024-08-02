// @ts-nocheck
// import { getRandomInt } from '../index.js'
// console.log(getRandomInt(1,2));

// import { localeCompare } from '../index.js'
// let array = ['白鸽', '麻雀', '大象', '狗', '猫', "鸡"];
// let str = '保定,常州,大连,佛山,福州,贵阳,哈尔滨,海口,合肥,惠州,济南,嘉兴,金华,昆明,兰州,南昌,南宁,南通,泉州,厦门,绍兴,石家庄,台州,太原,潍坊,温州,乌鲁木齐,无锡,徐州,烟台,长春,中山,珠海';

// const result = localeCompare(str.split(','));
// console.log(result);


// import { unique } from '../index.js'
// const res = unique([{}, {}]);
// console.log(res);

const phoneRegExp = /^1(3|4|5|6|7|8|9)\d{9}$/
const res = phoneRegExp.test(18801268763)
console.log(res)
