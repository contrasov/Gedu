import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/user.schema';
import { JwtService } from '@nestjs/jwt';
 
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService
  ) {}

  async register(name: string, dateBirth: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({ name, dateBirth, email, password: hashedPassword });
    return createdUser.save();
  }

  async login(email: string, password: string): Promise<{acces_token: string}>{
    const user = await this.userModel.findOne({email});
    if(!user) {
      throw new UnauthorizedException('Usuário ou senha inválido');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect) {
      throw new UnauthorizedException('Usuário ou senha inválido');
    }

    const paiload = {sub: user.id, email: user.email, name: user.name};
    const acces_token = this.jwtService.sign(paiload);

    return { acces_token };
  }
}
