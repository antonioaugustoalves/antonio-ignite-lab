import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotfication } from 'src/application/useCases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';


@Controller("notifications")
export class NotificationController {
  constructor(private sendNotification: SendNotfication){}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body
    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });

    return {notification}

  }
}
