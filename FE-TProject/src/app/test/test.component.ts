import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public clicked = false;
 
  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {

  }
  
 
  public surprise(): void {
 
    var canvas = this.renderer2.createElement('canvas');
 
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
 
    var myConfetti = confetti.create(canvas, { resize: true });

myConfetti();

setTimeout(() => {
  myConfetti.reset();

}, 2000);


 
  }

}
