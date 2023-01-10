import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { IgViewComponent } from './ig-view/ig-view.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { IgView1Component } from './ig-view1/ig-view1.component';
import { IgView2Component } from './ig-view2/ig-view2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'my-tasks', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'ig-view', component: IgViewComponent, data: { text: "\u914D\u8ECA\u8A08\u7B97" } },
  { path: 'my-tasks', component: MyTasksComponent, data: { text: 'My Tasks' } },
  { path: 'dashboards', component: DashboardsComponent, data: { text: 'Dashboards' } },
  { path: 'ig-view1', component: IgView1Component, data: { text: "\u914D\u8ECA\u8868" } },
  { path: 'ig-view2', component: IgView2Component, data: { text: "\u5B50\u30D3\u30E5\u30FC" } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
