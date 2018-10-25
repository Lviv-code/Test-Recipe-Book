import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  readonly ROOT_URL = "http://localhost:8080/recipes";

  constructor(protected _httpClient: HttpClient) { }

  save(recipe: Recipe): Observable<Recipe> {
    return this._httpClient.post<Recipe>(this.ROOT_URL , recipe);
  }

  delete(titleId: string): Observable<string> {
    return this._httpClient.delete<string>(`${this.ROOT_URL}/${titleId}`);
  }

  update(recipe: Recipe, id: any): Observable<Recipe>{
    return this._httpClient.patch<Recipe>(`${this.ROOT_URL}/${id}`, recipe);
  }

  findeAll(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(this.ROOT_URL);
  }

  findeOne(id: any): Observable<Recipe> {
    return this._httpClient.get<Recipe>(`${this.ROOT_URL}/${id}`);
  }
}
