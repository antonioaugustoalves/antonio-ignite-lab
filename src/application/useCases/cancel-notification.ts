import { Injectable } from '@nestjs/common';
import { Content } from '@application/entidades/content';
import { Notification } from '@application/entidades/notfication';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFoundError } from './errors/notification-not-found';

interface CancelNotificationRequest {
    notificationId: string
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request;
        const notification = await this.notificationsRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFoundError();
        }

        notification.cancel();

        await this.notificationsRepository.save(notification);
    }
}