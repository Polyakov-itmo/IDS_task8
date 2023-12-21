import { Controller, Get, Req, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { CreateLogDto } from './logs/dto/create-log-dto'
import { LogService } from './logs/logs.service'
import { Request, Response } from 'express'


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logService: LogService,
  ) {}

  COUNTER = 0;

  @Get('/')
  async default(@Req() request: Request): Promise<number> {

    await this.logService.create(request);

    return this.appService.default(this.COUNTER)
  }

  @Get('/stat')
  async stat(@Req() request: Request): Promise<number> {

    await this.logService.create(request);

    this.COUNTER = this.appService.inc(this.COUNTER);
    return this.appService.default(this.COUNTER)
  }

  @Get('/about')
  async about(@Req() request: Request): Promise<string> {

    await this.logService.create(request);

    return this.appService.about();
  }

  @Get('/logs')
  async logs(@Req() request: Request): Promise<string> {

    await this.logService.create(request);
    const logs = await this.logService.logInfo();

    return this.appService.viewLogs(logs);
  }
}
