import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public user$: Observable<User>;
  public userName: string;
  public userPhoto: string;
  public isAuthorized: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.userName = user.displayName;
          this.userPhoto = user.photoURL;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.router.navigate(['main']);
  }

  private updateUserData({ uid, email, displayName, photoURL}: User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data: User = {
      uid,
      email,
      displayName,
      photoURL
    };

    this.userName = data.displayName;
    this.userPhoto = data.photoURL;
    return userRef.set(data, { merge: true });
  }

  public async googleSignin(): Promise<boolean> {
    const provider: auth.GithubAuthProvider = new auth.GoogleAuthProvider();
    const credential: auth.UserCredential = await this.afAuth.auth.signInWithPopup(provider);
    this.updateUserData(credential.user);
    return this.router.navigate(['main']);
  }

  public async signOut(): Promise<boolean> {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }
}
