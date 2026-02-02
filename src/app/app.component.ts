import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieService } from './services/movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieCardComponent],
  imports: [RouterOutlet, MovieListComponent],
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public movieService: MovieService) {
    this.movieService.addRandomMovie(); 
  }
}

