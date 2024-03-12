import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album, Photo } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{

  photo!: Photo[];
  loaded!:boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private router: Router){

  }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params) => {
    const id: number = Number(params.get('id'));
    this.loaded = false;
    this.albumService.getPhotos(id).subscribe((photo) => {
      this.photo = photo
      console.log(photo)
      this.loaded = true;
    });
   })
  }

  goBack() {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }

}
