import { InMemoryNotificationRepository } from "@test/repositories-in-memory/notifications-repository-in-memory"
import { CancelNotification } from "./cancel-notification";
import {Notification} from '@application/entidades/notfication';
import { Content } from "@application/entidades/content";
import { NotificationNotFoundError } from "./errors/notification-not-found";

describe('Cancel notifications', () =>{
    it('Should be able to cancel a notification', async () =>{
        const notificationRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        const notification = new Notification({
            category:  'Social',
            content: new Content('Nova mensagem de Jonh Doe'),
            recipientId: 'test1234'
        });

        await notificationRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id
        });

        expect(notificationRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
    });

    it("it should not be able to cancel a non existing notification", async () =>{
        const notificationRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        

        expect(() =>{
            return cancelNotification.execute({
                notificationId: 'fake-id'
            });
        }).rejects.toThrow(NotificationNotFoundError)
    })
})

// Parei em 43:00