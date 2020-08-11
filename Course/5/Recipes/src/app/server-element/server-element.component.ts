import {
	Component,
	OnInit,
	Input,
	ViewEncapsulation,
	OnChanges,
	SimpleChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy,
	ViewChild,
	ElementRef,
	ContentChild
} from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	encapsulation: ViewEncapsulation.None // None, Native
})
export class ServerElementComponent implements
	OnInit,
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy {

	@Input('srvElement') element = {
		type: String,
		name: String,
		content: String
	};
	@Input() name: String;
	@ViewChild('heading', { static: true }) header: ElementRef;
	@ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

	constructor() {
		console.log('constructor()')
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges()');
		console.log(changes);
	}

	ngOnInit(): void {
		console.log('ngOnInit()')
		console.log(`ngOnInit(), textContent <div>: ${this.header.nativeElement.textContent}`)
		console.log(`ngOnInit(), textContent <p>: ${this.paragraph.nativeElement.textContent}`)
	}

	ngDoCheck() {
		console.log('ngDoCheck()')
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit()')
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked()')
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit()')
		console.log(`ngAfterViewInit(), textContent <div>: ${this.header.nativeElement.textContent}`)
		console.log(`ngAfterViewInit(), textContent <p>: ${this.paragraph.nativeElement.textContent}`)
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked()')
	}

	ngOnDestroy() {
		console.log('ngOnDestroy()')
	}

}
