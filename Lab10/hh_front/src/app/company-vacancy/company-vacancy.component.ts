import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from '../models';
import { HhServiceService } from '../hh-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-vacancy',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './company-vacancy.component.html',
  styleUrl: './company-vacancy.component.css'
})
export class CompanyVacancyComponent implements OnInit{

  vacancies!: Vacancy[];
  loaded:boolean = false;

  constructor(private route: ActivatedRoute, private hhService: HhServiceService){}

  ngOnInit(): void {
    this.getVacancies()
  }

  getVacancies(){
    this.route.paramMap.subscribe((params) => {
      const id: number = Number(params.get('id'));
      this.loaded = false;
      this.hhService.getVacancies(id).subscribe((vacancies) => {
          this.vacancies = vacancies;
        console.log(vacancies)
        this.loaded = true;
      });
     })
  }

}
