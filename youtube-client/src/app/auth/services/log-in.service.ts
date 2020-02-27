/* tslint:disable  typedef */
import { Inject, Injectable, InjectionToken } from '@angular/core';

export const loginStorage = new InjectionToken<Storage>('Login Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  public isLogged: boolean;

  constructor(@Inject(loginStorage) public storage: Storage) { }

  public get(key: string): string {
    return this.storage.getItem(key);
  }

  public set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  public remove(key: string): void {
    this.storage.removeItem(key);
  }

  public clear(): void {
    this.storage.clear();
  }
}
