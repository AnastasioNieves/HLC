import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  private _juegos = [
    {
      name: 'Minecraft',
      Image: 'Minecraft.png',
    },
    {
      name: 'League of leyends',
      Image: 'LoL.png',
    },
  ];

  getJuegos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let hasError = false;
        if (hasError) {
          reject(new Error('Error recuperando lista de juegos.'));
        } else {
          resolve(this._juegos);
        }
      }, 2000);
    });
  }

  constructor() {}
}
