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

    // Project data
    const projects: Project[] = [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'Production-grade Angular SPA using modular components, robust form validation, REST API integration, accessibility (WCAG), SEO, and mobile-first responsive design.',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'REST API'],
        imageUrl: 'assets/images/projects/portfolio-preview.webp',
        githubUrl: 'https://github.com/Krishna-Mutyala/website',
        liveUrl: 'https://krishna-mutyala.github.io/website'
      },
      {
        id: 2,
        title: 'Enterprise Analytics Platform',
        description: 'Developed high-performance RESTful APIs in .NET Core with Angular UI for enterprise analytics, featuring automated report generation and workflow automation pipelines.',
        technologies: ['C#', '.NET Core', 'Angular', 'SQL Server', 'Jenkins'],
        imageUrl: 'assets/images/projects/analytics-dashboard.webp',
        githubUrl: 'https://github.com/Krishna-Mutyala'
      },
      {
        id: 3,
        title: 'Automated Testing Framework',
        description: 'Implemented comprehensive automated testing framework achieving 85% coverage, integrating xUnit and Postman for backend and API testing.',
        technologies: ['xUnit', 'Postman', 'C#', 'Python', 'CI/CD'],
        imageUrl: 'assets/images/projects/testing-framework.webp',
        githubUrl: 'https://github.com/Krishna-Mutyala'
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
    return of(projects);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }
}
