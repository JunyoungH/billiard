import { trigger, animate, style, state, transition, query, group} from '@angular/animations';

export const hideShowAnimation = trigger('hideShowAnimation', [
    state('false', style({opacity:1})),
    state('true', style({opacity:0})),
    transition('*<=>*', animate('.5s',)),
    transition('*<=>*', animate('.5s'))
]);