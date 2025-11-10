import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

type State = 'idle' | 'loading' | 'empty' | 'error' | 'ok';

@Component({
  selector: 'app-reflection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Reflection</h2>
    <button (click)="load()">Buscar DLLs</button>

    <ng-container [ngSwitch]="state">
      <p *ngSwitchCase="'loading'">Cargando...</p>
      <p *ngSwitchCase="'empty'">No se encontraron DLLs.</p>
      <p *ngSwitchCase="'error'">Ocurrió un error al consultar el backend.</p>
    </ng-container>

    <ul *ngIf="state === 'ok'">
      <li *ngFor="let name of dlls">{{ name }}</li>
    </ul>
  `
})
export class ReflectionComponent {
  state: State = 'idle';
  dlls: string[] = [];
  constructor(private http: HttpClient) { }
  load() {
    this.state = 'loading';
    this.http.get<string[]>('/api/reflection/importers').subscribe({
      next: list => { this.dlls = list ?? []; this.state = this.dlls.length ? 'ok' : 'empty'; },
      error: () => this.state = 'error'
    });
  }
}
