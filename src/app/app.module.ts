import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleFormComponent } from './components/article/article-form/article-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainLayoutComponent,
    ArticleComponent,
    ArticleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }