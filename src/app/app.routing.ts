import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const appRoutes: Routes = [
  {
	   path: '',
	   component: WelcomeComponent
	},
  {
	   path: 'post',
	   component: PostsComponent
	},
  {
	   path: 'post/:id',
	   component: PostDetailsComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
