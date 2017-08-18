import { Injectable } from "@angular/core";

@Injectable()

export class UserProfileService {
  isLoggedIn: boolean = false;

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }
}
