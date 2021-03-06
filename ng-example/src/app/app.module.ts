import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { BooksComponent } from './books/books.component';
import { HistoryComponent } from './history/history.component';
import { FocusComponent } from './focus/focus.component';
import {RouteComponent} from "./shared/route.component";

/*Services*/
import { WeatherService } from './home/home.service';
import { HistoryService } from './history/history.service';
import {CanActivateAuthGuard} from "./shared/can-activate.service";
import {UserProfileService} from "./shared/user-profile.service";

/*Directives*/
import { HighlightDirective} from './_Directives/highlight.directive';
import { CustomCurrencyDirective} from './_Directives/customCurrency.directive';

/*Pipes*/
import { EllipsisPipe} from './_Pipes/ellipsis,pipe';
import { CustomCurrencyPipe } from './_Pipes/customCurrency.pipe';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import { BooksManagerComponent } from './books-manager/books-manager.component';
import { BooksFiltersComponent } from './books-filters/books-filters.component';
import {EmitterService} from "./shared/emitter.service";
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterBookComponent } from './register-book/register-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    HistoryComponent,
    HighlightDirective,
    EllipsisPipe,
    CustomCurrencyPipe,
    CustomCurrencyDirective,
    FocusComponent,
    LoginComponent,
    RouteComponent,
    BooksManagerComponent,
    BooksFiltersComponent,
    RegisterUserComponent,
    RegisterBookComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService, HistoryService, CustomCurrencyPipe, CanActivateAuthGuard, UserProfileService, LoginService, EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
