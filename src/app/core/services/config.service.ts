import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { AppActions } from "../../state/app/app.state";
import { Config } from "../../shared/types/config";
import { Store } from "@ngrx/store";

@Injectable({
    providedIn:"root"
  })
export class ConfigService {
    constructor(private http: HttpClient, private store: Store){
        this.load().subscribe((data: Config) => {
            this.store.dispatch(AppActions.load(data))
          })
    }

    load(){
        return this.http.get<Config>("/assets/config.json")
    }
}