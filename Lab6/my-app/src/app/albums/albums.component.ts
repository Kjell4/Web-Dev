import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { ALBUMS } from '../fake-db';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  albums!: Album[];
  newAlbum: Album;
  loaded:boolean = false;

  constructor(private albumService: AlbumService){
    this.newAlbum = {
      id: 101,
      title: '',
      body: ''
    }
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      alert('Album created!');
      this.newAlbum = {} as Album;
    })
  }

  getAlbums(){
    // this.albums = ALBUMS;
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((a) => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }

}
