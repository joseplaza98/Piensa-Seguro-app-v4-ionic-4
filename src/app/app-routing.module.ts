import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./sesion/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./sesion/login/login.module').then(m => m.LoginPageModule)
  },

  /**Elementos en el menú */
  {
    path: 'plan-capacitacion',
    loadChildren: () => import('./Adicionales/plan-capacitacion/plan-capacitacion.module').then(m => m.PlanCapacitacionPageModule)
  },
  {
    path: 'foro',
    loadChildren: () => import('./Adicionales/foro/foro.module').then(m => m.ForoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./Adicionales/estadisticas/estadisticas.module').then(m => m.EstadisticasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'insignias',
    loadChildren: () => import('./Adicionales/Logros/insignias/insignias.module').then(m => m.InsigniasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ayudas',
    loadChildren: () => import('./Adicionales/ayudas/ayudas.module').then(m => m.AyudasPageModule)
  },
  {
    path: 'bibliografia',
    loadChildren: () => import('./Adicionales/bibliografia/bibliografia.module').then(m => m.BibliografiaPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./Adicionales/acerca-de/acerca-de.module').then(m => m.AcercaDePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },

  /**Actividades y evaluaciones */
  {
    path: 'a1-su1-u1',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a1-su1-u1/a1-su1-u1.module').then(m => m.A1Su1U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su1-u1',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a2-su1-u1/a2-su1-u1.module').then(m => m.A2Su1U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a3-su1-u1',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a3-su1-u1/a3-su1-u1.module').then(m => m.A3Su1U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su2-u1',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U1/Capsu-U1-SU2/a1-su2-u1/a1-su2-u1.module').then(m => m.A1Su2U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su1-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a1-su1-u2/a1-su1-u2.module').then(m => m.A1Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su1-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a2-su1-u2/a2-su1-u2.module').then(m => m.A2Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a3-su1-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a3-su1-u2/a3-su1-u2.module').then(m => m.A3Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a4-su1-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a4-su1-u2/a4-su1-u2.module').then(m => m.A4Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su2-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU2/a1-su2-u2/a1-su2-u2.module').then(m => m.A1Su2U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su3-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU3/a1-su3-u2/a1-su3-u2.module').then(m => m.A1Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su3-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU3/a2-su3-u2/a2-su3-u2.module').then(m => m.A2Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su4-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU4/a1-su4-u2/a1-su4-u2.module').then(m => m.A1Su4U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su4-u2',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U2/Capsu-U2-SU4/a2-su4-u2/a2-su4-u2.module').then(m => m.A2Su4U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su1-u3',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U3/Capsu-U3-SU1/a1-su1-u3/a1-su1-u3.module').then(m => m.A1Su1U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su2-u3',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U3/Capsu-U3-SU2/a1-su2-u3/a1-su2-u3.module').then(m => m.A1Su2U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su2-u3',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U3/Capsu-U3-SU2/a2-su2-u3/a2-su2-u3.module').then(m => m.A2Su2U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a3-su2-u3',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U3/Capsu-U3-SU2/a3-su2-u3/a3-su2-u3.module').then(m => m.A3Su2U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su3-u3',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U3/Capsu-U3-SU3/a1-su3-u3/a1-su3-u3.module').then(m => m.A1Su3U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su1-u4',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U4/Capsu-U4-SU1/a1-su1-u4/a1-su1-u4.module').then(m => m.A1Su1U4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su2-u4',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U4/Capsu-U4-SU2/a1-su2-u4/a1-su2-u4.module').then(m => m.A1Su2U4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su2-u4',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U4/Capsu-U4-SU2/a2-su2-u4/a2-su2-u4.module').then(m => m.A2Su2U4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su1-u5',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U5/Capsu-U5-SU1/a1-su1-u5/a1-su1-u5.module').then(m => m.A1Su1U5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su1-u5',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U5/Capsu-U5-SU1/a2-su1-u5/a2-su1-u5.module').then(m => m.A2Su1U5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su2-u5',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U5/Capsu-U5-SU2/a1-su2-u5/a1-su2-u5.module').then(m => m.A1Su2U5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su1-u6',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a1-su1-u6/a1-su1-u6.module').then(m => m.A1Su1U6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su1-u6',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a2-su1-u6/a2-su1-u6.module').then(m => m.A2Su1U6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a3-su1-u6',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a3-su1-u6/a3-su1-u6.module').then(m => m.A3Su1U6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a1-su1-u7',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U7/Capsu-U7-SU1/a1-su1-u7/a1-su1-u7.module').then(m => m.A1Su1U7PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'a2-su1-u7',
    loadChildren: () => import('./A&E/Capsulas (Actividades)/Capsu-U7/Capsu-U7-SU1/a2-su1-u7/a2-su1-u7.module').then(m => m.A2Su1U7PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba-u1',
    loadChildren: () => import('./A&E/Pruebas (Evalauciones)/prueba-u1/prueba-u1.module').then(m => m.PruebaU1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba-u2',
    loadChildren: () => import('./A&E/Pruebas (Evalauciones)/prueba-u2/prueba-u2.module').then(m => m.PruebaU2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba-u3',
    loadChildren: () => import('./A&E/Pruebas (Evalauciones)/prueba-u3/prueba-u3.module').then(m => m.PruebaU3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba-u4',
    loadChildren: () => import('./A&E/Pruebas (Evalauciones)/prueba-u4/prueba-u4.module').then(m => m.PruebaU4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba-u5',
    loadChildren: () => import('./A&E/Pruebas (Evalauciones)/prueba-u5/prueba-u5.module').then(m => m.PruebaU5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba-u6',
    loadChildren: () => import('./A&E/Pruebas (Evalauciones)/prueba-u6/prueba-u6.module').then(m => m.PruebaU6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba-u7',
    loadChildren: () => import('./A&E/Pruebas (Evalauciones)/prueba-u7/prueba-u7.module').then(m => m.PruebaU7PageModule),
    canActivate: [AuthGuard]
  },

  /**Logros conseguidos */
  {
    path: 'logros-u1',
    loadChildren: () => import('./Adicionales/Logros/logros-u1/logros-u1.module').then(m => m.LogrosU1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logros-u2',
    loadChildren: () => import('./Adicionales/Logros/logros-u2/logros-u2.module').then(m => m.LogrosU2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logros-u3',
    loadChildren: () => import('./Adicionales/Logros/logros-u3/logros-u3.module').then(m => m.LogrosU3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logros-u4',
    loadChildren: () => import('./Adicionales/Logros/logros-u4/logros-u4.module').then(m => m.LogrosU4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logros-u5',
    loadChildren: () => import('./Adicionales/Logros/logros-u5/logros-u5.module').then(m => m.LogrosU5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logros-u6',
    loadChildren: () => import('./Adicionales/Logros/logros-u6/logros-u6.module').then(m => m.LogrosU6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logros-u7',
    loadChildren: () => import('./Adicionales/Logros/logros-u7/logros-u7.module').then(m => m.LogrosU7PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'certificado',
    loadChildren: () => import('./Adicionales/Logros/certificado/certificado.module').then(m => m.CertificadoPageModule),
    canActivate: [AuthGuard]
  },

  /**Tema 1*/
  {
    path: 'int-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/int-u1/int-u1.module').then(m => m.IntU1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selec-su-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/selec-su-u1/selec-su-u1.module').then(m => m.SelecSuU1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su1-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/Sub Unidad 1/t1-su1-u1/t1-su1-u1.module').then(m => m.T1Su1U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su1-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/Sub Unidad 1/t2-su1-u1/t2-su1-u1.module').then(m => m.T2Su1U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su1-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/Sub Unidad 1/t3-su1-u1/t3-su1-u1.module').then(m => m.T3Su1U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't4-su1-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/Sub Unidad 1/t4-su1-u1/t4-su1-u1.module').then(m => m.T4Su1U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su2-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/Sub Unidad 2/t1-su2-u1/t1-su2-u1.module').then(m => m.T1Su2U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su2-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/Sub Unidad 2/t2-su2-u1/t2-su2-u1.module').then(m => m.T2Su2U1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su2-u1',
    loadChildren: () => import('./Contenidos AVA/Unidad 1/Sub Unidad 2/t3-su2-u1/t3-su2-u1.module').then(m => m.T3Su2U1PageModule),
    canActivate: [AuthGuard]
  },

  /**Tema 2*/
  {
    path: 'int-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/int-u2/int-u2.module').then(m => m.IntU2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selec-su-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/selec-su-u2/selec-su-u2.module').then(m => m.SelecSuU2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su1-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 1/t1-su1-u2/t1-su1-u2.module').then(m => m.T1Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su1-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 1/t2-su1-u2/t2-su1-u2.module').then(m => m.T2Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su1-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 1/t3-su1-u2/t3-su1-u2.module').then(m => m.T3Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't4-su1-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 1/t4-su1-u2/t4-su1-u2.module').then(m => m.T4Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't5-su1-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 1/t5-su1-u2/t5-su1-u2.module').then(m => m.T5Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't6-su1-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 1/t6-su1-u2/t6-su1-u2.module').then(m => m.T6Su1U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su2-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 2/t1-su2-u2/t1-su2-u2.module').then(m => m.T1Su2U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su2-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 2/t2-su2-u2/t2-su2-u2.module').then(m => m.T2Su2U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su3-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 3/t1-su3-u2/t1-su3-u2.module').then(m => m.T1Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su3-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 3/t2-su3-u2/t2-su3-u2.module').then(m => m.T2Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su3-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 3/t3-su3-u2/t3-su3-u2.module').then(m => m.T3Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't4-su3-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 3/t4-su3-u2/t4-su3-u2.module').then(m => m.T4Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't5-su3-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 3/t5-su3-u2/t5-su3-u2.module').then(m => m.T5Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't6-su3-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 3/t6-su3-u2/t6-su3-u2.module').then(m => m.T6Su3U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su4-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 4/t1-su4-u2/t1-su4-u2.module').then(m => m.T1Su4U2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su4-u2',
    loadChildren: () => import('./Contenidos AVA/Unidad 2/Sub Unidad 4/t2-su4-u2/t2-su4-u2.module').then(m => m.T2Su4U2PageModule),
    canActivate: [AuthGuard]
  },

  /**Unidad 3*/
  {
    path: 'int-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/int-u3/int-u3.module').then(m => m.IntU3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selec-su-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/selec-su-u3/selec-su-u3.module').then(m => m.SelecSuU3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su1-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 1/t1-su1-u3/t1-su1-u3.module').then(m => m.T1Su1U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su1-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 1/t2-su1-u3/t2-su1-u3.module').then(m => m.T2Su1U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su1-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 1/t3-su1-u3/t3-su1-u3.module').then(m => m.T3Su1U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't4-su1-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 1/t4-su1-u3/t4-su1-u3.module').then(m => m.T4Su1U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't5-su1-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 1/t5-su1-u3/t5-su1-u3.module').then(m => m.T5Su1U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't6-su1-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 1/t6-su1-u3/t6-su1-u3.module').then(m => m.T6Su1U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su2-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 2/t1-su2-u3/t1-su2-u3.module').then(m => m.T1Su2U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su2-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 2/t2-su2-u3/t2-su2-u3.module').then(m => m.T2Su2U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su2-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 2/t3-su2-u3/t3-su2-u3.module').then(m => m.T3Su2U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su3-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 3/t1-su3-u3/t1-su3-u3.module').then(m => m.T1Su3U3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su3-u3',
    loadChildren: () => import('./Contenidos AVA/Unidad 3/Sub Unidad 3/t2-su3-u3/t2-su3-u3.module').then(m => m.T2Su3U3PageModule),
    canActivate: [AuthGuard]
  },

  /**Unidad 4*/
  {
    path: 'int-u4',
    loadChildren: () => import('./Contenidos AVA/Unidad 4/int-u4/int-u4.module').then(m => m.IntU4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selec-su-u4',
    loadChildren: () => import('./Contenidos AVA/Unidad 4/selec-su-u4/selec-su-u4.module').then(m => m.SelecSuU4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su1-u4',
    loadChildren: () => import('./Contenidos AVA/Unidad 4/Sub Unidad 1/t1-su1-u4/t1-su1-u4.module').then(m => m.T1Su1U4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su2-u4',
    loadChildren: () => import('./Contenidos AVA/Unidad 4/Sub Unidad 2/t1-su2-u4/t1-su2-u4.module').then(m => m.T1Su2U4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su2-u4',
    loadChildren: () => import('./Contenidos AVA/Unidad 4/Sub Unidad 2/t2-su2-u4/t2-su2-u4.module').then(m => m.T2Su2U4PageModule),
    canActivate: [AuthGuard]
  },

  /**Unidad 5*/
  {
    path: 'int-u5',
    loadChildren: () => import('./Contenidos AVA/Unidad 5/int-u5/int-u5.module').then(m => m.IntU5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selec-su-u5',
    loadChildren: () => import('./Contenidos AVA/Unidad 5/selec-su-u5/selec-su-u5.module').then(m => m.SelecSuU5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su1-u5',
    loadChildren: () => import('./Contenidos AVA/Unidad 5/Sub Unidad 1/t1-su1-u5/t1-su1-u5.module').then(m => m.T1Su1U5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su1-u5',
    loadChildren: () => import('./Contenidos AVA/Unidad 5/Sub Unidad 1/t2-su1-u5/t2-su1-u5.module').then(m => m.T2Su1U5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su1-u5',
    loadChildren: () => import('./Contenidos AVA/Unidad 5/Sub Unidad 1/t3-su1-u5/t3-su1-u5.module').then(m => m.T3Su1U5PageModule)
  },
  {
    path: 't1-su2-u5',
    loadChildren: () => import('./Contenidos AVA/Unidad 5/Sub Unidad 2/t1-su2-u5/t1-su2-u5.module').then(m => m.T1Su2U5PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su2-u5',
    loadChildren: () => import('./Contenidos AVA/Unidad 5/Sub Unidad 2/t2-su2-u5/t2-su2-u5.module').then(m => m.T2Su2U5PageModule),
    canActivate: [AuthGuard]
  },

  /**Unidad 6*/
  {
    path: 'int-u6',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/int-u6/int-u6.module').then(m => m.IntU6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selec-su-u6',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/selec-su-u6/selec-su-u6.module').then(m => m.SelecSuU6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'criptolaboratorio1',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/Sub Unidad 1/criptolaboratorio1/criptolaboratorio1.module').then(m => m.Criptolaboratorio1PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'criptolaboratorio2',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/Sub Unidad 1/criptolaboratorio2/criptolaboratorio2.module').then(m => m.Criptolaboratorio2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su1-u6',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/Sub Unidad 1/t1-su1-u6/t1-su1-u6.module').then(m => m.T1Su1U6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su1-u6',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/Sub Unidad 1/t2-su1-u6/t2-su1-u6.module').then(m => m.T2Su1U6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't3-su1-u6',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/Sub Unidad 1/t3-su1-u6/t3-su1-u6.module').then(m => m.T3Su1U6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't4-su1-u6',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/Sub Unidad 1/t4-su1-u6/t4-su1-u6.module').then(m => m.T4Su1U6PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't5-su1-u6',
    loadChildren: () => import('./Contenidos AVA/Unidad 6/Sub Unidad 1/t5-su1-u6/t5-su1-u6.module').then(m => m.T5Su1U6PageModule),
    canActivate: [AuthGuard]
  },

  /**Unidad 7*/
  {
    path: 'int-u7',
    loadChildren: () => import('./Contenidos AVA/Unidad 7/int-u7/int-u7.module').then(m => m.IntU7PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selec-su-u7',
    loadChildren: () => import('./Contenidos AVA/Unidad 7/selec-su-u7/selec-su-u7.module').then(m => m.SelecSuU7PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't1-su1-u7',
    loadChildren: () => import('./Contenidos AVA/Unidad 7/Sub Unidad 1/t1-su1-u7/t1-su1-u7.module').then(m => m.T1Su1U7PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 't2-su1-u7',
    loadChildren: () => import('./Contenidos AVA/Unidad 7/Sub Unidad 1/t2-su1-u7/t2-su1-u7.module').then(m => m.T2Su1U7PageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
