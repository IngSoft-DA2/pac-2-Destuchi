import { Injectable } from '@angular/core';

const KEY = 'reflection-count'; // cambiá a sessionStorage si preferís

@Injectable({ providedIn: 'root' })
export class CounterService {
  private _count = 0;

  constructor() {
    const raw = localStorage.getItem(KEY);
    const parsed = raw !== null ? Number(raw) : 0;
    this._count = Number.isFinite(parsed) ? parsed : 0;
  }

  increment(): void {
    this._count++;
    localStorage.setItem(KEY, String(this._count));
  }

  get value(): number {
    return this._count;
  }

  reset(): void {
    this._count = 0;
    localStorage.setItem(KEY, '0');
  }
}
