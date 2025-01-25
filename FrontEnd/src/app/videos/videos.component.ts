import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-videos',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  username: string = '';
  searchQuery = '';
  videos: any[] = [];
  favoriteVideos: any[] = [];
  isLoading = false;

  constructor(
    private videoService: VideoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const storedUsername = localStorage.getItem('username');
    this.username = storedUsername ? storedUsername : 'Usuario';
  }
  
  searchVideos() {
    this.isLoading = true;
    this.videoService.searchVideos(this.searchQuery).subscribe({
      next: (response) => {
        this.videos = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        this.snackBar.open('Error al buscar videos', 'Cerrar', { duration: 3000 });
      }
    });
  }

  addToFavorites(video: any) {
    if (!this.favoriteVideos.includes(video)) {
      this.favoriteVideos.push(video);
      this.snackBar.open('Video agregado a favoritos', 'Cerrar', { duration: 3000 });
    }
  }

  removeFromFavorites(video: any) {
    const index = this.favoriteVideos.indexOf(video);
    if (index > -1) {
      this.favoriteVideos.splice(index, 1);
      this.snackBar.open('Video eliminado de favoritos', 'Cerrar', { duration: 3000 });
    }
  }

  playVideo(video: any) {
    window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}