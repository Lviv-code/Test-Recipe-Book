import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Recipe } from 'src/shared/models/recipe.model';
import { RecipesService } from 'src/shared/services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  recipeForm: FormGroup;
  recipe: Recipe = new Recipe();
  appear: boolean = false;
  id: any;
  titleId: string;

  constructor(private _recipesService: RecipesService,  private _router: ActivatedRoute, private _routers: Router ){ }

  ngOnInit() {
    
    this._router.params
      .subscribe(params => {
        this.id = params['id'];
        this._recipesService
        .findeOne(this.id)
        .subscribe(data => 
          {this.recipe = data[0];
            this.recipeForm.setValue({
              title: this.recipe.title,
              recipeDescreption: this.recipe.recipeDescreption
            })
            this.titleId = data[0].titleId;
          console.log(this.recipe)},
          err=>{
            console.log(err);
          })
        });    

      
    this.recipeForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      recipeDescreption: new FormControl('', [Validators.required])
    });

    this.recipeForm.valueChanges.subscribe(value => {
    this.recipe = value;
    });
  }

  //save recipe
  updateRecipe(){
    if(this.recipeForm.valid){
      this.recipe.update = false;
      this.recipe.titleId = this.titleId;
      this._recipesService.update(this.recipe, this.id).subscribe((next)=>{
        console.log(next);
        this._routers.navigate(['..']);
      }, (err)=>{
        console.log(err);
      });
      
    }
  }
}