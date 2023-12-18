import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLacoRepeticao]'
})
export class LacoRepeticaoDirective {

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appLacoRepeticao(quantidade : number){
    for (var i = 0; i < quantidade; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
