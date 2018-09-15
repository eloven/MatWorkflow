import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DargDropService } from '../darg-drop.service';

@Directive({
  selector: '[appDraggable][draggedClass][dragTag][dragData]',
})
export class DragDirective {
  // 默认不支持dargable
  private _isDraggble = false;
  // 拖动过程中添加的class
  @Input() draggedClass: string;
  // 拖动事件的唯一标识
  @Input() dragTag: string;
  // 拖动时间的数据
  @Input() dragData: any;
  // 能否拖动指令  set方法设置属性  appDraggable = “true” 调用set方法; get 方法返回属性
  @Input('appDraggable')
  set isDraggable ( val: boolean) {
    // 通过输入属性设置
    this._isDraggble =  val;
    // 给dom设置 draggable 属性
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggble;
  }
  constructor(
     private el: ElementRef,
     private rd: Renderer2,
     private dragService: DargDropService) { }
    //  事件监听  开始拖动
  @HostListener('dragstart', ['$event'])
  ondragstart(evt: Event) {
    // console.log(evt);
    // nativeElement == 原生dom;
    if (this.el.nativeElement === evt.target) {
      // 使用 Renderer2 操作dom
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      // console.log(this.dragTag);
      // 拖动开始：存储数据对象
      this.dragService.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }
  // 结束拖动
  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
      // console.log('drag end');
    }
  }
}
