/**
 * https://www.youtube.com/watch?v=0Qsg8fyKwO4
 */

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, router:Router){
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        throw new Error("Method not implemented.");
        this.authService.authInfo$
            .map(authInfo => authInfo.isLoggedIn())
            .take(1)
            .do(allowed => {
                if(!allowed){
                    this.router.navigate(['']);
                }
            });
  
    }

}