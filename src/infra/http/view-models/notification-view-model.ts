import { Notification } from "@application/entidades/notfication";

export class NotificationViewModel {
    static toHttp(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category
        }
    }
}