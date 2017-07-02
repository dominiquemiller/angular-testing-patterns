import { SyncService } from './sync.service';

// Test Synchronous service in isolation
// Do not need Angular TestBed

describe('Sync Service', () => {

    const item = 'New Thing To Add';
    const items = [ 'another item', 'another item 2', 'yet another item'];
    let service: SyncService;

    beforeAll( () => {
        service = new SyncService();
    });

    it('Should be an instance of SyncService', () => expect(service instanceof SyncService).toBeTruthy());

    it('Should add an item to listOfItems property', () => {
       let addTolist = service.addItem(item);

        expect(addTolist.length).toBe(1);
        expect(service.listOfStuff[0]).toBe(item);
    });

    it('Should remove an item from listOfItems property', () => {
       let removeFromlist = service.removeItem(item);

        expect(removeFromlist.length).toBe(0);
    });

    it('Should add a group of items to listOfItems property', () => {
       let combinedList = service.addGroup(items);

        expect(combinedList.length).toBe(3);
    });

    it('Should provide a list of items', () =>  expect(service.listOfStuff.length).toBe(3) );
});
