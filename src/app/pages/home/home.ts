import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../../models/project.interface';
import { Portfolio } from '../../services/portfolio';
import { ProjectCardComponent } from '../../components/project-card/project-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectCardComponent]
})
export class HomeComponent implements OnInit {
  featuredProjects$: Observable<Project[]>;

  constructor(private portfolioService: Portfolio) {
    this.featuredProjects$ = this.portfolioService.getProjects().pipe(
      map(projects => projects.slice(0, 3)) // Get first 3 projects as featured
    );
  }

  ngOnInit(): void {}
}
