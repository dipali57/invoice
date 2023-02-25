import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UnauthorizedException } from '../exception/unauthorized.exception';
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization;

    if (token && decrypt(token) === process.env.AUTH_TOKEN) {
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-var-requires
const crypto = require('crypto');

const KEY = 'bluwmgphexjjjuos';

const decrypt = (encrypted) => {
  const decipher = crypto.createDecipheriv('aes-128-ecb', KEY, null);
  const decrypted = decipher.update(encrypted, 'base64', 'utf8');
  return decrypted + decipher.final('utf8');
};
