import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClickMeComponent} from "./click-me/click-me.component";
import {KeyupComponent} from "./keyup/keyup.component";
import {LoopBackComponent} from "./loop-back/loop-back.component";
import {LittleTourComponent} from "./little-tour/little-tour.component";

const routes: Routes = [
    {path: 'c', component: ClickMeComponent},
    {path: 'k', component: KeyupComponent},
    {path: 'l', component: LoopBackComponent},
    {path: 'lt', component: LittleTourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
