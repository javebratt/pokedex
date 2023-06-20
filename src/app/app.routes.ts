import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadComponent: () =>
      import('./pokemon/pokemon.page').then((m) => m.PokemonPage),
  },
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
];
