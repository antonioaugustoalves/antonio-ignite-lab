import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotfication } from '@application/useCases/send-notification';
import { CreateNotificationBody } from '@infra/http/dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';


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
    const raw = NotificationViewModel.toHttp(notification);
    return {
      notification: raw
  }

  }
}
