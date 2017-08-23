import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import { LoginComponent } from './login/login.component'
import {CanActivateAuthGuard} from './shared/can-activate.service';
import { RouteComponent } from './shared/route.component';
import {BooksManagerComponent} from "./books-manager/books-manager.component";

const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
      path: 'about',
      loadChildren: 'app/about/about.module#AboutModule'
    },
    {
      path: 'books',
      component: BooksManagerComponent
    },
    // {
    //   path: 'books',
    //   component: RouteComponent,
    //   canActivate: [CanActivateAuthGuard],
    //   canActivateChild: [CanActivateAuthGuard],
    //   children: [{
    //     path: '',
    //     component: BooksComponent
    //   }]
    // },
    {
      path: 'login',
      component: LoginComponent
    },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
