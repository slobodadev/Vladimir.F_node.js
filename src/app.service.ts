import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    // todo check status of all app parts
    return 'ok';
  }
}
