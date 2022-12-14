import { Content } from "./content"
describe('Notification content tests', () =>{
    it('should be able to create a notification content', () =>{
        const content = new Content('Você recebeu uma nova solicitação de amizade');
        expect(content).toBeTruthy();
    });
    
    it('should not be able to create a notification content with length less then 5 characters',() =>{
        expect(() => new Content('oi')).toThrowError();
    });
    
    it('should not be able to create a notification content with length more then 240 characters',() =>{
        expect(() => new Content('oi'.repeat(210))).toThrowError();
    });
})

