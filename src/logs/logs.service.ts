import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLogDto } from './dto/create-log-dto';
import { Log } from './logs.model';

@Injectable()
export class LogService {
  
  constructor(@InjectModel(Log) private logRepository: typeof Log){}


  async create(request: any) {

    let date = new Date()
    let log: CreateLogDto = {
      datetime: date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getSeconds()+':'+date.getMinutes() + ':' + date.getHours(),
      client_info :  (request.header('User-Agent') ?? '') + request.url
    }
    const result = await this.logRepository.create(log);
    return result;
  }

  
  async logInfo() {
    const logs = await this.logRepository.findAll();
    logs.map(log => console.log(log))
    return logs;
  }
}
