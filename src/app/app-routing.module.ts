import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'most',
    loadChildren: () => import('./most/most.module').then( m => m.MostPageModule)
  },
  {
    path: 'most-popular',
    loadChildren: () => import('./most-popular/most-popular.module').then( m => m.MostPopularPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'plugin',
    loadChildren: () => import('./plugin/plugin.module').then( m => m.PluginPageModule)
  },
  {
    path: 'remote.services',
    loadChildren: () => import('./Services/remote.services/remote.services.module').then( m => m.Remote.ServicesPageModule)
  },
  {
    path: 'remote.services',
    loadChildren: () => import('./Services/remote.services/remote.services.module').then( m => m.Remote.ServicesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
