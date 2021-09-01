"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    let formattedString = '';
    formattedString = `${date.substr(3, 2)}-${date.substr(0, 2)}-${date.substr(6, 4)}`;
    return formattedString;
}
exports.formatDate = formatDate;
//# sourceMappingURL=formatDate.js.map