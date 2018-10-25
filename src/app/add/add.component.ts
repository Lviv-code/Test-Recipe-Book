import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipe } from 'src/shared/models/recipe.model';
import { RecipesService } from 'src/shared/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  recipeForm: FormGroup;
  recipe: Recipe = new Recipe();
  appear: boolean = false;
  titleId: string = '';

  constructor(private _recipesService: RecipesService, private __routers: Router){ }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      recipeDescreption: new FormControl('', [Validators.required])
    });
    this.recipeForm.valueChanges.subscribe(value => {
    this.recipe = value;
    });
  }

  //save recipe
  addRecipe(){
    if(this.recipeForm.valid){
      this.recipe.titleId = this.recipe.title.replace(/[^a-zA-Z]+/g, '');
      this.recipe.update = false;
      this._recipesService.save(this.recipe).subscribe((next)=>{
        this.__routers.navigate(['..']);
        console.log(next)
      }, (err)=>{
        console.log(err);
      })
    }
  }
}
