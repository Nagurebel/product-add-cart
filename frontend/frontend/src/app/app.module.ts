import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegiterformComponent } from './auth/regiterform/regiterform.component';
import { LoginformComponent } from './auth/loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterInterceptor } from './inter.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [AppComponent, RegiterformComponent, LoginformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShareModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: InterInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
