import { GamerTagService } from './gamer-tag.service';
import { Gamer } from '../models/gamer.interface';

describe('GamerService', () => {
    let service: GamerTagService;
    const gamer: Gamer = {
        network: 'xbox',
        gamerTag: 'mr1monkey'
    };

    beforeEach( () =>  {
      service = new GamerTagService()
    });

    it('should be an instance of GamerService', () => {
        expect(service instanceof GamerTagService).toBeTruthy();
    });

    it('should set a gamers info', () => {
        spyOn(localStorage, 'setItem');
        service.set(gamer);
        expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('should retieve a gamers info', () => {
       spyOn(localStorage, 'setItem').and.callThrough();
       spyOn(localStorage, 'getItem').and.callThrough();
       service.set(gamer);
       const info = service.get();

       expect(localStorage.getItem).toHaveBeenCalled();
       expect(info.network).toBe('xbox');
       expect(info.gamerTag).toBe('mr1monkey');
    });

    it('should delete a gamers info', () => {
        spyOn(localStorage, 'setItem').and.callThrough();
        service.set(gamer);
        spyOn(localStorage, 'removeItem').and.callThrough();
        service.delete();

        expect(localStorage.removeItem).toHaveBeenCalled();
    });

});