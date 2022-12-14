
import { Content } from './content';
import { Notification } from './notfication';

describe('Notification testes', () =>{
    it('should be able to create a notification', () =>{
        const notification = new Notification({
            content: new Content('Alguem curtiu o seu comentário'),
            category: 'social',
            recipientId: 'rerere'
        });

        expect(notification).toBeTruthy()
    });
    
    
})

