import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  } from "@angular/router";
import { Injectable } from '@angular/core';

import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private loginService : LoginService,
                private route : Router){

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.loginService.isAutenticado()){
            return true;
        }else{
            this.route.navigate(['login'])
            return false;
        }
    }
    
}