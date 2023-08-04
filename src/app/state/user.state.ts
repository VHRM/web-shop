import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserState {
    private readonly loggedIn = new BehaviorSubject<boolean>(false);

    public getLoggedObserver(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    public setLogged(value: boolean): void {
        this.loggedIn.next(value);
    }
}
