import { Directive, ElementRef, Renderer2 } from '@angular/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        ['(focus)']: 'onFocus()',
        ['(blur)']: 'blur',
    }
})

export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    onFocus() {
        this.renderer.setAttribute(this.el, 'width', '200');
    }

    onBlur () {
        this.renderer.setAttribute(this.el, 'width', '120');
    }

}