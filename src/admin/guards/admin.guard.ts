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
      secret,
    }: { username: string; password: string; secret: string } = req.body;
    if(!username && !password && !secret) return false;
    if (username == process.env.USERNAME && password == process.env.PASSWORD) {
      if (secret == process.env.SECRET) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
