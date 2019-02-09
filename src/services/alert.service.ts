import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  onHeroError() {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Atenção! Parece que há algo de errado com o herói selecionado.'
    });
  }

  onHeroSuccess(callback) {
    let timerInterval;
    Swal.fire({
      title: 'Tudo pronto!',
      html: 'Seu jogo comecará em <strong></strong> segundos.',
      timer: 5000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000 | 0).toString()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        callback();
      }
    })
  }
}
