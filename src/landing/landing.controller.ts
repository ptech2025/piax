import { Controller, Get, Header } from '@nestjs/common';
import { LANDING_HTML } from './landing.html';

@Controller()
export class LandingController {
  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  getLanding(): string {
    return LANDING_HTML;
  }
}
