import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, Photo } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  getPhotos(id: number): Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }

  createAlbum(newAlbum: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, newAlbum);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    const updatedAlbum = { title: newTitle };  
    return this.client.put(`${this.BASE_URL}/albums/${id}`, updatedAlbum);
  }

  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }
}
