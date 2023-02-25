"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const unauthorized_exception_1 = require("../exception/unauthorized.exception");
class AuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;
        if (token && decrypt(token) === process.env.AUTH_TOKEN) {
            return true;
        }
        else {
            throw new unauthorized_exception_1.UnauthorizedException();
        }
    }
}
exports.AuthGuard = AuthGuard;
const crypto = require('crypto');
const KEY = 'bluwmgphexjjjuos';
const decrypt = (encrypted) => {
    const decipher = crypto.createDecipheriv('aes-128-ecb', KEY, null);
    const decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return decrypted + decipher.final('utf8');
};
//# sourceMappingURL=auth.guards.js.map