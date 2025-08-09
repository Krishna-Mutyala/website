import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ProjectCardComponent {
  @Input() project!: Project;

  private techLogos: Record<string, string> = {
    'Angular': '/assets/images/logos/angular.webp',
    'TypeScript': '/assets/images/logos/typescript.webp',
    'JavaScript': '/assets/images/logos/javascript.webp',
    'React': '/assets/images/logos/react.webp',
    'Node.js': '/assets/images/logos/nodejs.webp',
    'MongoDB': '/assets/images/logos/mongodb.webp',
    'HTML': '/assets/images/logos/html5.webp',
    'CSS': '/assets/images/logos/css3.webp',
    'SASS': '/assets/images/logos/sass.webp'
  };

  getTechLogo(tech: string): string | null {
    return this.techLogos[tech] || null;
  }
}
