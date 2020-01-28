import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'registro-law/:correo/:password',
    loadChildren: () => import('./pages/registro-law/registro-law.module').then( m => m.RegistroLawPageModule)
  },
  {
    // tslint:disable-next-line: max-line-length
    path: 'registro-law-ubi/:correo/:password/:cedula/:nombre/:apellido/:disponibilidad/:celular/:idiomas/:diasLaborales/:hEntrada/:hSalida',
    loadChildren: () => import('./pages/registro-law-ubi/registro-law-ubi.module').then( m => m.RegistroLawUbiPageModule)
  },
  {
    path: 'registro-user/:correo/:password',
    loadChildren: () => import('./pages/registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard-user',
    loadChildren: () => import('./pages/dashboard-user/dashboard-user.module').then( m => m.DashboardUserPageModule)
  },
  {
    // tslint:disable-next-line: max-line-length
    path: 'registro-law-form/:correo/:password/:cedula/:nombre/:apellido/:disponibilidad/:celular/:idiomas/:diasLaborales/:hEntrada/:hSalida/:address/:long/:lat',
    loadChildren: () => import('./pages/registro-law-form/registro-law-form.module').then( m => m.RegistroLawFormPageModule)
  },
  {
    path: 'dashboard-law',
    loadChildren: () => import('./pages/dashboard-law/dashboard-law.module').then( m => m.DashboardLawPageModule)
  },
  {
    path: 'cv-lawyer',
    loadChildren: () => import('./pages/cv-lawyer/cv-lawyer.module').then( m => m.CvLawyerPageModule)
  },
  {
    path: 'contacto-lawyer/:celular/:cedula',
    loadChildren: () => import('./pages/contacto-lawyer/contacto-lawyer.module').then( m => m.ContactoLawyerPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'inbox-law',
    loadChildren: () => import('./pages/inbox-law/inbox-law.module').then( m => m.InboxLawPageModule)
  },
  {
    path: 'inbox-user',
    loadChildren: () => import('./pages/inbox-user/inbox-user.module').then( m => m.InboxUserPageModule)
  },
  {
    path: 'profile-user',
    loadChildren: () => import('./pages/profile-user/profile-user.module').then( m => m.ProfileUserPageModule)
  },
  {
    // tslint:disable-next-line: max-line-length
    path: 'verificacion/:correo/:password/:cedula/:nombre/:apellido/:disponibilidad/:celular/:idiomas/:diasLaborales/:hEntrada/:hSalida/:address/:long/:lat/:escuela/:carrera/:mesTermino/:anoTermino',
    loadChildren: () => import('./pages/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'tabs-law',
    loadChildren: () => import('./pages/tabs-law/tabs-law.module').then( m => m.TabsLawPageModule)
  },
  {
    path: 'profile-menu',
    loadChildren: () => import('./pages/profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule)
  },
  {
    path: 'home-law',
    loadChildren: () => import('./pages/home-law/home-law.module').then( m => m.HomeLawPageModule)
  },
  {
    path: 'calendar-law',
    loadChildren: () => import('./pages/calendar-law/calendar-law.module').then( m => m.CalendarLawPageModule)
  },
  {
    path: 'pago-user',
    loadChildren: () => import('./pages/pago-user/pago-user.module').then( m => m.PagoUserPageModule)
  },
  {
    path: 'verificacion-user/:nombre/:apellido/:correo/:telefono/:celular/:password',
    loadChildren: () => import('./pages/verificacion-user/verificacion-user.module').then( m => m.VerificacionUserPageModule)
  },
  {
    path: 'profile-menu-user',
    loadChildren: () => import('./pages/profile-menu-user/profile-menu-user.module').then( m => m.ProfileMenuUserPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'verificacion-password',
    loadChildren: () => import('./pages/verificacion-password/verificacion-password.module').then( m => m.VerificacionPasswordPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./pages/confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'pagado/:cedula',
    loadChildren: () => import('./pages/pagado/pagado.module').then( m => m.PagadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
