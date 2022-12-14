import { Injectable } from '@nestjs/common';
import { Content } from '../entidades/content';
import {Notification} from '../entidades/notfication';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string
}

interface SendNotficationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotfication {
    constructor(
        private notificationsRepository: NotificationsRepository
    ) {

    }
    async execute(request: SendNotificationRequest): Promise<SendNotficationResponse> {
        const {recipientId, content, category} = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        });

        await this.notificationsRepository.create(notification)

        return {notification}
    }
}