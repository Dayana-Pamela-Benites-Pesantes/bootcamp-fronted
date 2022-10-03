import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';


const routes: Routes = [
  {path:'', component: ListComponent},
  {path:'create', component: CreateComponent},
  {path:'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
