import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { LoginReqDTO } from './dto/login.req.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('auth')
  @UseGuards(LocalAuthGuard)
  @Post('employeelogin')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(@Request() req, @Response() res, @Body() body: LoginReqDTO) {
    try {
      const tokens = await this.authService.login(req.user);
      // res.cookie('refresh_token', user.refresh_token, {
      //   expires: new Date(
      //     new Date().getTime() +
      //       Number(this.configService.get('SECRET_COOKIE_EXPIRATION_TIME')),
      //   ),
      //   sameSite: 'none',
      //   httpOnly: true,
      //   secure: true,
      // });
      res.send(tokens);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
