import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UiService } from './ui.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  constructor(private service: UiService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.service.token) {
      req = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + this.service.token
        ),
      });
    }
    return next.handle(req);
  }
}
