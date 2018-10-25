import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { PreviousVersionsComponent } from './previous-versions/previous-versions.component';

const routes: Routes = [
  {path: '', component: RecipeComponent},
  {path: 'add', component: AddComponent},
  {path: 'previous/:title', component: PreviousVersionsComponent},
  {path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
