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
}
