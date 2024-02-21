import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStaticPColor]',
  standalone: true
})
export class StaticPColorDirective implements OnInit{
  constructor(private elementRef: ElementRef<HTMLDivElement>) { 
    this.elementRef.nativeElement.style.color = this.textColor;
  }

  @Input() textColor = 'purple'

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.textColor;
  }

}
