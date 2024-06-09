import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Please signup' };
  }

  signin() {
    return { msg: 'Please signin' };
  }
}
