import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoffee]',
  standalone: true
})
export class CoffeeDirective implements OnInit{


  @Input() coffeeTxt = `<pre>
    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________> ___
    |             |/ _ \\
    |               | | |
    |               |_| |
 ___|             |\\___/
/    \\___________/    \\
\\_____________________/
  </pre>`;
 
  baseTxt = '';


  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.innerHTML = '';
  }

  

  @HostListener('click')
  onClick(){
    let target = this.elementRef.nativeElement;
    target.innerHTML === this.baseTxt ? target.innerHTML = this.coffeeTxt : target.innerHTML = this.baseTxt;
  }

  ngOnInit():void{
    this.baseTxt = this.elementRef.nativeElement.innerHTML;
  }

}
