import {Notification} from '../entidades/notfication';

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
}