import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from './article.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url:string = environment.apibaseUrl + '/Articles'
  list:Article[]= [];
  formData : Article = new Article()
  formSubmitted : boolean = false;

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get<Article[]>(this.url+'/listArticles')
      .subscribe({
        next: (res: Article[]) => {
          this.list = res;
        },
        error: (err: any) => { console.log(err); }
      });
  }

  postArticle(){
    return this.http.post(this.url, this.formData);
  }
  putArticle(){
    return this.http.put(this.url + '/' + this.formData.idArticle, this.formData)
  }

  deleteArticle(idArticle: number){
    return this.http.delete(this.url + '/' + idArticle)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new Article()
    this.formSubmitted = false;
  }

}
