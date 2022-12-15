import {Notification} from '@application/entidades/notfication';

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string ): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>;
}