import {
	Directive,
	Renderer2,
	OnInit,
	ElementRef,
	HostListener,
	HostBinding,
	Input
} from '@angular/core';

@Directive({
	selector: '[appBetterHighlighter]'
})

export class BetterHighlighterDirective implements OnInit {

	// Binding to Directive Properties
	@Input() defaultColor: String = 'transparent';
	@Input() highlightColor: String = 'orange';

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		this.backColor = this.defaultColor;
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
		this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.highlightColor);
	}

	// Using HostListener to Listen to Host Events
	@HostListener('mouseenter') mouseOver(eventData: Event) {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
		this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
		// this.backColor = 'orange';
		this.backColor = this.highlightColor;
	}

	@HostListener('mouseleave') mouseLeave() {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
		this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'orange');
		// this.backColor = 'transparent';
		this.backColor = this.defaultColor;
	}

	// Using HostBinding to Bind to Host Properties
	@HostBinding('style.backgroundColor') backColor: String;

}
