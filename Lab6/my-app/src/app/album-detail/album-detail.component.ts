import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Album } from '../models';
import { ALBUMS } from '../fake-db';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  
  album!: Album;
  loaded!:boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private router: Router){

  }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params) => {
    const id: number = Number(params.get('id'));
    this.loaded = false;
    this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
      console.log(album)
      this.loaded = true;
    });
   })
  }

  goToPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  saveChanges(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    // Вызываем метод сервиса для обновления заголовка альбома
    this.albumService.updateAlbumTitle(id, this.album.title).subscribe(() => {
      // Можете также добавить обработку успешного сохранения, если необходимо
      console.log('Title updated successfully.');
    });
  }
  
}
