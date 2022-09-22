import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappyBirthdayComponent } from './happy-birthday/happy-birthday.component';
import { IntroCompanyComponent } from './intro-company/intro-company.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path: 'birthday',
    component: HappyBirthdayComponent
  },
  {
    path: 'intro',
    children: [
      {
        path: '',
        component: IntroCompanyComponent
      },
    ]
  },
  {
    path: 'test',
    loadChildren: () =>
      import(`./test/test.module`).then((m) => m.TestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
