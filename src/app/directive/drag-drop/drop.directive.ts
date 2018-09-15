import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DargDropService, DragData } from '../darg-drop.service';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appDraggable][dropTags][dragEnterClass]'
})
export class DropDirective {
  // drap事件标签集合
  @Input() dropTags: Array<string> = [];
  @Input() dragEnterClass: string;
  // 发射事件
  @Output() dropped: EventEmitter<DragData>  = new EventEmitter();
  private dragData$;
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DargDropService) {
      // 从服务中获取拖动的数据  使用pipe()管道过滤 只取一次值
      this.dragData$ = this.service.getDragData().pipe(
        take(1)
      );
     }
  //  HostListener 事件key 小写字母, handle()驼峰
  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    // 阻止事件冒泡
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.dragData$.subscribe( dragData => {
        // console.log(this.dragData$);
        // console.log(dragData);
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  // 覆盖el
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    // 多级拖拽需要阻止事件冒泡
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.dragData$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }
  // 拖动离开了，移除class
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
        this.dragData$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  // 松开鼠标放下  给el传递数据
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.dragData$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          // 拖拽完了清除数据
          this.service.clearDragData();
        }
      });
    }
  }
}
