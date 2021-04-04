import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Not fond movie ID: ${id}`);
      // NestJS 가 제공하는 예외처리, HttpException 에서 확장된 NestJS의 제공 기능
    }
    return movie;
  }

  deleteOne(id: string): boolean {
    this.getOne(id); //위에서 만든 예외 처리를 재활용 할 수 있다.!
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updaetData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updaetData });
  }
}
