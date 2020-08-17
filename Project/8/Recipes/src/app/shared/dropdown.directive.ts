import {
	Directive,
	Input,
	Output,
	HostListener,
	EventEmitter,
	HostBinding
} from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})

export class DropdownDirective {

	// // my solution:
	// @Input() appDropdown(condition: boolean) {
	// 	if (!condition) {
	// 	} else {
	// 	}
	// }

	// isOpen: boolean = false;
	// @Output() mouseClicked = new EventEmitter<boolean>();

	// @HostListener('click') toggleOpen(eventData: Event) {
	// 	console.log('dropdown.directive.ts');
	// 	console.log(`@HostListener('click') click(eventData: Event):`);

	// 	this.mouseClicked.emit(
	// 		this.isOpen
	// 	);

	// 	this.isOpen = !this.isOpen;
	// }
	// // my solution ^

	@HostBinding('class.open') isOpen: boolean = false;

	@HostListener('click') toggleOpen() {
		console.log('dropdown.directive.ts');
		console.log(`@HostListener('click'):`);

		this.isOpen = !this.isOpen;
	}

}