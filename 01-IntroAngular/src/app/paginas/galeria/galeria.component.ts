import { JuegoService } from '../../services/juego.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  private _juegoService: JuegoService = new JuegoService();

  ngOnInit() {
    //let juegosList = this._juegoService.getJuegos();

    let gameList;
    this._juegoService
      .getJuegos()
      .then((value) => {
        gameList = value;
        console.log(gameList);
      })

      .catch((err) => {
        console.log('Error: ' + err.message);
      });
  }
}
