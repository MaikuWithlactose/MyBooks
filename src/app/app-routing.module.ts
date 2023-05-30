import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormRegisterComponent } from './component/register/form-register.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: "header", component: HeaderComponent},
  { path: "footer", component: FooterComponent},
  { path: "register", component: FormRegisterComponent },
  { path: "profile", component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
