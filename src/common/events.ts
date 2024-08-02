import { isArray } from "./checkDataType";
import { toArray } from "./transformDataType";
export class CommonEvent {
  events = Object.create(null);
  // 绑定事件
  $on(event: string | Array<string>, fn: Function) {
    const vm = this;
    if (isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm.events[event] || (vm.events[event] = [])).push(fn);
    }
    return vm;
  }

  // 移除事件
  $off(event?: string | Array<string>, fn?: Function) {
    const vm = this;
    // 如果不传参数，表示移除所有事件
    if (!arguments.length) {
      vm.events = Object.create(null);
      return vm;
    }
    // array of events
    if (isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn);
      }
      return vm;
    }
    // specific event
    const cbs = vm.events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm.events[event] = null;
      return vm;
    }
    // specific handler
    let cb;
    let i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  }

  // 绑定执行一次就销毁的事件
  $once(event: string, fn: Function) {
    const vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  }

  // 触发事件
  $emit(event: string) {
    const vm = this;
    let cbs = vm.events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      const args = toArray(arguments, 1);
      for (let i = 0, l = cbs.length; i < l; i++) {
        // invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        const handler = cbs[i];
        args ? handler.apply(vm, args) : handler.call(vm);
      }
    }
    return vm;
  }
}
