import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Injection du service Movie
  movieService = inject(MovieService);

  // Méthode appelée au clic du bouton "Suggérer un film"
  onSuggestMovie() {
    this.movieService.addRandomMovie();
  }
}
