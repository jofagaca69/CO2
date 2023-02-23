import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('esvanecerDesvanecer', [
      state('in', style({ opacity: 1 })),

      transition(':enter', [
        style({ opacity: 0 }),
        animate(400)
      ]),

      transition(':leave',
        animate(200, style({ opacity: 0 })))
    ])
  ]
})
export class CarouselComponent implements OnChanges{
  @Input() slides: Array<any> = [];
  currentSlide = 0;
  public currentSlideObject = this.slides[0]

  constructor() {
    console.log(this.slides);

    this.currentSlideObject = this.slides[0];

  }

  ngOnChanges(changes: SimpleChanges) {

    this.currentSlideObject = this.slides[0]

  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? (this.slides.length - 1) : previous;
    this.currentSlideObject = this.slides[this.currentSlide]
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    this.currentSlideObject = this.slides[this.currentSlide]
  }
}
