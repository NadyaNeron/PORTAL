import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAsyncFor]',
  standalone: true
})
export class AsyncForDirective {
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  // @Input({ required:true }) set appAsyncForOf(items: any[]) {
  //   (async () => {
  //     this.viewContainer.clear()
  //     for (let i = 0; i < items.length; i++) {
  //       await new Promise (resolve => setTimeout(resolve, 500))
  //       this.viewContainer.createEmbeddedView(this.templateRef, {
  //         $implicit: items[i],
  //         index: i
  //       });
  //     }
  //   })();
  // }

  @Input({ required:true }) set appAsyncForOf(items: any[]) {
    const paintNext = (idx = 0) => {
      if (idx >= items.length) {
        return
      }
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: items[idx],
        index: idx
      });
      setTimeout(() => {
        paintNext(idx + 1);
      }, 20);
    }
    paintNext();
  }
}
