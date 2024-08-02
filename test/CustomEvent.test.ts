import { CustomEvent } from '../src/common/index'

const event = new CustomEvent();
const handler1 = function () {
    console.log(1);
}
const handler2 = function () {
    console.log(2);
}
const clickHandler = function () {
    console.log('click');
}
event.on('el', handler1);
event.on('el', handler2);
event.on('click', clickHandler);
event.off('el', handler1);
// event.off('el', handler2);
event.once('click', clickHandler);
event.trigger('el');
event.trigger('click');
event.trigger('click');
// console.log(event.handlers);