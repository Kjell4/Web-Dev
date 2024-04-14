import { Component, OnInit } from '@angular/core';
import { Company } from '../models';
import { HhServiceService } from '../hh-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{

  companies!: Company[];
  loaded:boolean = false;

  constructor(private hhService: HhServiceService){}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.loaded = false;
    this.hhService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    })
  }

}
