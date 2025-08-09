import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.interface';
import { Portfolio } from '../../services/portfolio';
import { ProjectCardComponent } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent]
})
export class ProjectsComponent {
  projects$: Observable<Project[]>;

  constructor(private portfolioService: Portfolio) {
    this.projects$ = this.portfolioService.getProjects();
  }
}
