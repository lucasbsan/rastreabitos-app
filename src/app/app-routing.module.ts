import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HabitEditorComponent } from './habit-editor/habit-editor.component';

const routes: Routes = [
  { path: '', component: LandPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'habit', component: HabitEditorComponent},
  { path: 'habit/:id', component: HabitEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
