import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Project } from '../models/project.interface';
import { ApiService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class Portfolio {
  private cachedProjects: Project[] | null = null;

  constructor(private apiService: ApiService) {}

  getProjects(): Observable<Project[]> {
    // Return cached projects if available
    if (this.cachedProjects) {
      return of(this.cachedProjects);
    }

    // Fallback data in case API is not ready
    const fallbackProjects: Project[] = [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'Modern portfolio website built with Angular',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
        imageUrl: 'assets/images/portfolio.jpg',
        githubUrl: 'https://github.com/yourusername/portfolio'
      }
    ];

    // Use API service when ready
    // return this.apiService.get<Project[]>('/projects').pipe(
    //   map(projects => {
    //     this.cachedProjects = projects;
    //     return projects;
    //   }),
    //   catchError(() => of(fallbackProjects))
    // );

    // Using fallback data for now
    return of(fallbackProjects);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }
}
