import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { RecipesService } from 'src/shared/services/recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { PreviousVersionsComponent } from './previous-versions/previous-versions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    AddComponent,
    UpdateComponent,
    PreviousVersionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
