import { Injectable } from '@nestjs/common'
import { Log } from './logs/logs.model'

@Injectable()
export class AppService {
  default(counter: number): number {
    return counter
  }

  inc(counter: number): number {
    return (counter += 1)
  }

  about(): string {
    return '<h1>Polyakov M.Y., P41091</h1>'
  }

  viewLogs(logs: Log[]): string {
    let content = logs.reduce(
      (emptyStr, log) =>
        emptyStr +
        StartTag('div', logStyle) +

          StartTag('div', '') +
          log.datetime +
          EndTag('div') +

          StartTag('div', '') +
          log.client_info +
          EndTag('div') +

        EndTag('div'),
        '',
    )
    return StartTag('div', containerStyle) + content + EndTag('div')
  }
}

function StartTag(tagName: string, style: string) {
  return `<${tagName} style="${style}">`
}

function EndTag(tagName: string) {
  return `</${tagName}>`
}



const dateTimeStyle = `
  border-radius: 4px; 
  background-color: rgb(65, 74, 242); 
  color: white;
  font-size: 18px;
  padding: 4px; 
  margin: 5px 0;
`
const containerStyle = `
  display: flex; 
  flex-direction: column;
  `
const logStyle = `
  border-radius: 4px; 
  background-color: rgb(65, 74, 242); 
  color: white;
  font-size: 18px;
  padding: 4px; 
  margin: 5px 0;`
