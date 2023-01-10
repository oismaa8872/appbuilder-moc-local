import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgViewComponent } from './ig-view/ig-view.component';
import { IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxBadgeModule, IgxAvatarModule, IgxCalendarModule, IgxCardModule, IgxGridModule, IgxTreeGridModule, IgxTabsModule, IgxToggleModule, IgxDropDownModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { IgView1Component } from './ig-view1/ig-view1.component';
import { IgView2Component } from './ig-view2/ig-view2.component';
import { IgxPieChartModule } from 'igniteui-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    IgViewComponent,
    MyTasksComponent,
    DashboardsComponent,
    IgView1Component,
    IgView2Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxBadgeModule,
    IgxAvatarModule,
    IgxCalendarModule,
    IgxCardModule,
    IgxGridModule,
    IgxTreeGridModule,
    IgxTabsModule,
    IgxPieChartModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
