import { trigger, style, animate, transition, query, group, animateChild } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> AboutPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                })
            ]),
            query(':enter', [
                style({
                    left: '-100%',
                })
            ]),
            query(':leave', [
                style({
                    left: '0%',
                })
            ]),
            group([
                query(':leave', [
                    animate('400ms ease-out', style({
                        left: '-100%',
                    }))
                ]),
                query(':enter', [
                    animate('400ms ease-out', style({
                        left: '0%',
                    }))
                ])
            ]),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', [
                style({ left: '0%' })
            ]),
            group([
                query(':leave', [
                    animate('400ms ease-out', style({ left: '-100%' }))
                ]),
                query(':enter', [
                    animate('400ms ease-out', style({ left: '0%' }))
                ])
            ]),
        ])
    ]);