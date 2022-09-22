
import { Component, OnInit } from '@angular/core';
import {
  rotateInDownLeftOnEnterAnimation,
  rollInAnimation,
  zoomInLeftAnimation,
  zoomInDownOnEnterAnimation,
  hueRotateAnimation,
  zoomInUpOnEnterAnimation,
  rubberBandAnimation,
  flashAnimation,
  fadeInOnEnterAnimation,
  rubberBandOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-happy-birthday',
  templateUrl: './happy-birthday.component.html',
  styleUrls: ['./happy-birthday.component.scss'],
  animations: [
    rotateInDownLeftOnEnterAnimation({ anchor: 'enter' }),
    zoomInDownOnEnterAnimation({ anchor: 'enterLetterAnim1' }),
    fadeInOnEnterAnimation({ anchor: 'enterLetterAnim2' }),
    zoomInUpOnEnterAnimation({ anchor: 'enterLetterAnim3' }),
    rollInAnimation({ anchor: 'letterAnim1' }),
    zoomInLeftAnimation({ anchor: 'letterAnim2' }),
    rubberBandAnimation({ anchor: 'letterAnim3', delay: 150 }),
    hueRotateAnimation({ anchor: 'hueLetter', duration: 5000 }),
    flashAnimation({ anchor: 'flash' }),
    rubberBandOnEnterAnimation({ anchor: 'btnEnter', delay: 1150, duration: 2000 }),
    fadeInOnEnterAnimation({ anchor: 'btnEnterFadeIn', delay: 100, duration: 1000 })
  ]
})
export class HappyBirthdayComponent implements OnInit {
  text1 = 'TDESK CHÚC MỪNG SINH NHẬT TMT'.split('');
  text2 = '24/09/2022'.split('');

  isHappy = false;
  animationState = false;
  hueState = false;
  flashState = false;
  animationRubberBand = false;
  number1: Array<number>=[...Array(100).keys()];

  constructor() { }

  getDelay(index: any, lenght: any) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }

  animate() {
    this.isHappy = true;
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  animateRubberBand() {
    this.animationRubberBand = false;
    setTimeout(() => {
      this.animationRubberBand = true;
    }, 1);
  }

  ngOnInit() {
    setInterval(() => { this.animateRubberBand() }, 2000)
  }
}
