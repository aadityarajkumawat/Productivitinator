"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
function delay(returned, time = 2000) {
    let promise = new Promise((res) => {
        setTimeout(() => {
            res(returned);
        }, time);
    });
    return promise;
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map