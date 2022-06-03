import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class InterInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    handle: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const modifyData = request.clone({
      headers: request.headers.append(
        'authrization',
        `Bearer ${this.authService.getToken()}`
      ),
    });
    return handle.handle(request);
  }
}
