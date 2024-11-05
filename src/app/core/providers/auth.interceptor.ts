import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { ACCESS_TOKEN } from "../../shared/consts/localstorage";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const reqWithHeader = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)),
      });
    return next(reqWithHeader);
  }