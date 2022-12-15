import { Notification } from "src/application/entidades/notfication";
import { NotificationsRepository } from "src/application/repositories/notifications-repository"



export class InMemoryNotificationRepository implements NotificationsRepository{
    async findById(notificationId: string): Promise<Notification> {
        const notification = this.notifications.find((item) => (item.id === notificationId));

        if(!notification){
            return null;
        }

        return notification;
    }
   
    public notifications: Notification[] = [];
    async create(notification: Notification): Promise<void> {
       this.notifications.push(notification)
    }

    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex((item) => item.id === notification.id);

        if(notificationIndex >= 0){
            this.notifications[notificationIndex] = notification
        }
    }
    
    
}

