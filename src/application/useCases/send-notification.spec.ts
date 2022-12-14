import { InMemoryNotificationRepository } from "../../../test/repositories-in-memory/notifications-repository-in-memory";
import { Content } from "../entidades/content";
import { Notification } from "../entidades/notfication";
import { SendNotfication } from "./send-notification"


describe('Send notification', () => {
    it('should be able to send a notification', async () => {

        const notificationsRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotfication(notificationsRepository);
        await sendNotification.execute({
            recipientId: '1234-1234',
            content: 'Você tem um novo e-mail',
            category: 'social'
        });
        
        expect(notificationsRepository.notifications).toHaveLength(1)
    })
})