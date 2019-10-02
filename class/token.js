const jwt = require('jsonwebtoken')

function getjwtToken(payload){
    return jwt.sign({usuario:payload},'Junior1997',{
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    })
}

module.exports = {
    getjwtToken
}

// "use strict";
// exports.__esModule = true;
// var jsonwebtoken_1 = require("jsonwebtoken");
// var Token = /** @class */ (function () {
//     function Token() {
//     }
//     Token.getjwtToken = function (payload) {
//         return jsonwebtoken_1["default"].sign({ usuario: payload }, 'Junior1997', {
//             expiresIn: 60 * 60 * 24 // expires in 24 hours
//         });
//     };
//     Token.comprobarToken = function (token) {
//         return new Promise(function (resolve, reject) {
//             jsonwebtoken_1["default"].verify(token, 'Junior1997', function (err, decoded) {
//                 if (err) {
//                     reject();
//                 }
//                 else {
//                     resolve(decoded);
//                 }
//             });
//         });
//     };
//     return Token;
// }());
// exports["default"] = Token;
