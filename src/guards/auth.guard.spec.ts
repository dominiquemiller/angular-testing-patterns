import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { GamerTagService } from '../services/gamer-tag.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let router: Router;

    let gamer = {
        network: '0',
        gamerTag: 'mr1monkey',
        membershipId: '12345678'
    }

    const gamerService = {
        get: function() { return gamer; }
    }

    const routerStub = {
      navigate: jasmine.createSpy('navigate')
     }

    beforeEach( () => {
        TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],
        providers: [
            AuthGuard,
            { provide: Router, useValue: routerStub },
            { provide: GamerTagService, useValue: gamerService}
        ]
        });

        guard = TestBed.get(AuthGuard);
        router = TestBed.get(Router);
    });

    it('should be defined', () => {
      expect(guard).toBeDefined();
    });

    it('should navigate to menu if user is logged in', () => {
       expect(guard.canActivate()).toBeFalsy();
       expect(router.navigate).toHaveBeenCalledWith(['/menu/0/12345678']);
    });

    it('should activate route if user if not logged in', () => {
        gamer = null;

        expect(guard.canActivate()).toBeTruthy();
    });

});