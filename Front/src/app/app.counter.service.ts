import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private _count = 0;
  increment() { this._count++; }
  get value() { return this._count; }
}
