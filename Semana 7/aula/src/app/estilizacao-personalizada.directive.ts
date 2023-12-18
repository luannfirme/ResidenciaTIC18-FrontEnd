import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstilizacaoPersonalizada]'
})
export class EstilizacaoPersonalizadaDirective{

  constructor(
    private elemento: ElementRef, private renderizador: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'transparent');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'black')
    this.renderizador.setStyle(this.elemento.nativeElement, 'cursor', 'pointer')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'red');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'white')
    this.renderizador.setStyle(this.elemento.nativeElement, 'cursor', 'pointer')
  }

}
