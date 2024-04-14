import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyVacancyComponent } from './company-vacancy/company-vacancy.component';

export const routes: Routes = [
    {path: '', redirectTo:'companies', pathMatch:'full'},
    {path: 'companies', component: CompanyListComponent, title: 'Home'},
    {path: 'companies/:id/vacancies', component: CompanyVacancyComponent, title: 'Vacancies'}
];
