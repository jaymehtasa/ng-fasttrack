import { Directive, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {
  constructor(private eleRef: ElementRef) { }

  @HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.cursor') cursor;

  ngOnInit() {

  }

  @HostListener('mouseenter') enter() {
    this.backgroundColor = '#d3d3d3';
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') leave() {
    this.backgroundColor = 'transparent';
    this.cursor = '';
  }
}
