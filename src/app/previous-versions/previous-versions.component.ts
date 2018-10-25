import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/shared/models/recipe.model';
import { RecipesService } from 'src/shared/services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previous-versions',
  templateUrl: './previous-versions.component.html',
  styleUrls: ['./previous-versions.component.css']
})
export class PreviousVersionsComponent implements OnInit {
  recipes: Recipe[]=[];
  title: string ='';
  titleId: string='';
  emty: boolean = false;
  

  constructor(private _recipeService: RecipesService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this._router.params
    .subscribe(params=>{
      this.titleId = params['title'];
      console.log(this.titleId);
    });
    this._recipeService
      .findeAll()
      .subscribe(recipes=>{
        this.recipes = recipes
          .filter(obj => obj.update === true && obj.titleId === this.titleId);
        console.log(this.recipes);
        if(this.recipes.length === 0) this.emty = true;
    });
  }
}
