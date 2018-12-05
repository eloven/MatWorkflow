import { animate, trigger, style, transition, query, stagger } from '@angular/animations';
// query 搜索子元素设置进出场动画， stagger 给多个动画设置间隔
export const listAnimation = trigger('listAnim', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger(100, [
            animate('1s', style({ opacity: 1 }))
        ]), { optional: true }),
        query(':leave', style({ opacity: 1 }), { optional: true }),
        query(':leave', stagger(100, [
            animate('1s', style({ opacity: 0 }))
        ]), { optional: true })
    ])
]);
