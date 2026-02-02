import { Component, output , input} from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  movie = input.required<Movie>();

  delete = output<void>();
  rate = output<number>();   
  toggle = output<void>();

  handleDelete(): void {
    this.delete.emit();
  }

  handleRate(value: number): void {
    this.rate.emit(value);
  }

  handleToggle(): void {
    this.toggle.emit();
  }

}
