import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
{path: 'Create',
pathMatch: 'full',
component: MemberFormComponent},
{path:'member',
pathMatch: 'full',

  component: MemberComponent
},


{path:'',
pathMatch: 'full',

  component: MemberComponent
},

{path : ':id/edit',
pathMatch: 'full',
component: MemberFormComponent

},

{path : 'dashboard',
pathMatch: 'full',
component: DashboardComponent

},{path : 'tools',
pathMatch: 'full',
component: ToolsComponent

},{path : 'articles',
pathMatch: 'full',
component: ArticlesComponent

},
{path : 'events',
pathMatch: 'full',
component: EventsComponent

},




//////////////////////
{
  path: '**',
  component: MemberComponent
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
