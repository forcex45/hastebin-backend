import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as Request;
    const {
      username,
      password,
    }: { username: string; password: string; } = req.body;
    if (!username && !password) return false;
    if (username == process.env.USERNAME && password == process.env.PASSWORD) {
       return true;
    } else {
      return false;
    }
  }
}
