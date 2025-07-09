import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { RegisterUserDto, LoginUserDto } from './dto/auth.dto';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({ type: RegisterUserDto })
  async register(@Body() body: RegisterUserDto) {
    const user = await this.authService.register(body);
    return { id: user._id, email: user.email, name: user.name };
  }

  @Post('login')
  @ApiBody({type: LoginUserDto})
  async login(@Body() body: LoginUserDto) {
    return this.authService.login(body.email, body.password);
  }
}
