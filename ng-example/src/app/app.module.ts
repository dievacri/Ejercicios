import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { BooksComponent } from './books/books.component';
import { HistoryComponent } from './history/history.component';
import { FocusComponent } from './focus/focus.component';

/*Services*/
import { WeatherService } from './home/home.service';
import { HistoryService } from './history/history.service';

/*Directives*/
import { HighlightDirective} from './_Directives/highlight.directive';
import { CustomCurrencyDirective} from './_Directives/customCurrency.directive';

/*Pipes*/
import { EllipsisPipe} from './_Pipes/ellipsis,pipe';
import { CustomCurrencyPipe } from './_Pipes/customCurrency.pipe';

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
    FocusComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService, HistoryService, CustomCurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
