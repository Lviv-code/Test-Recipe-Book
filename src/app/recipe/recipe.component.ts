import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/shared/models/recipe.model';
import { RecipesService } from 'src/shared/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[]=[];

  constructor(private _recipeService: RecipesService) { }

  ngOnInit() {
    this._recipeService.findeAll().subscribe(recipes=>{
      this.recipes = recipes.filter(obj => obj.update== false);
      console.log(this.recipes);
    });
  }
  deleteRecipe(title){
    this._recipeService.delete(title).subscribe(next =>{
        console.log(next);
        this._recipeService.findeAll().subscribe(recipes=>{
          this.recipes = recipes.filter(obj => obj.update== false);
          console.log(this.recipes);
        });
      }, (err)=>{
        console.log(err);
      })
  }
}
