import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Adjust path if necessary

// Define your routes
const routes: Routes = [
  { path: 'car-model', loadChildren: () => import('./car-model-management/car-model-management.module').then(m => m.CarModelManagementModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/car-model', pathMatch: 'full' }
];

// Export the routes
export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
