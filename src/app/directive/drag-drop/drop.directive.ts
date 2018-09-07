import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DargDropService, DragData } from '../darg-drop.service';

@Directive({
  selector: '[appDraggable][dropTags][dragEnterClass]'
})
export class DropDirective {
  // drap事件标签集合
  @Input() dropTags: Array<string> = [];
  @Input() dragEnterClass: string;
  @Output() dropped: EventEmitter<DragData>  = new EventEmitter();
  private drag$;
  constructor(
    private el: ElementRef,
    private rdt: Renderer2,
    private service: DargDropService) {
      this.drag$ = this.service.getDragData();
     }
  //  HostListener 事件key 小写字母, handle()驼峰
  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    // 阻止事件冒泡
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe( dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rdt.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        // console.log(dragData);
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rdt.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rdt.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rdt.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rdt.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    // if (this.el.nativeElement === ev.target) {
    //     this.drag$.subscribe(dragData => {
    //     if (this.dropTags.indexOf(dragData.tag) > -1) {
    //       this.rdt.removeClass(this.el.nativeElement, this.dragEnterClass);
    //     }
    //   });
    // }
  }
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    // if (this.el.nativeElement === ev.target) {
    //   this.drag$.subscribe(dragData => {
    //     if (this.dropTags.indexOf(dragData.tag) > -1) {
    //       this.rdt.removeClass(this.el.nativeElement, this.dragEnterClass);
    //       this.dropped.emit(dragData);
    //       this.service.clearDragData();
    //     }
    //   });
    // }
  }
}
