import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LandPageComponent } from './land-page/land-page.component';
import { AboutComponent } from './about/about.component';
import { ListHabitsComponent } from './list-habits/list-habits.component';
import { HabitComponent } from './habit/habit.component';
import { DetailsComponent } from './details/details.component';
import { HabitEditorComponent } from './habit-editor/habit-editor.component';
import { FormsModule } from '@angular/forms';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    LandPageComponent,
    AboutComponent,
    ListHabitsComponent,
    HabitComponent,
    DetailsComponent,
    HabitEditorComponent,
    SuggestionComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
