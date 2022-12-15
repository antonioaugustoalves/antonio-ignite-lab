import { Notification } from "@application/entidades/notfication";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
            id: notification.id
        }
    }
}