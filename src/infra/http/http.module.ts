import { Module } from '@nestjs/common';
import { SendNotfication } from 'src/application/useCases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports:[DatabaseModule],
  providers:[
    SendNotfication
  ],
  controllers: [NotificationController]
  
})
export class HttpModule {}
