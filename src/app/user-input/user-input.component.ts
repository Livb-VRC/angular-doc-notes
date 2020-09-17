import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  values = []
  
  @ViewChild('myInput')
  myInput:ElementRef;

  constructor(private renderer: Renderer2){}

  
  onKey(value: string){
    this.values.push(value)
    // Makes #myInput value ''
    this.renderer.setProperty(this.myInput.nativeElement, 'value', '');

    if(this.values.length > 4) {
      // Disables the input component
     this.renderer.setAttribute(this.myInput.nativeElement, 'disabled', 'true')
    }
  }

  onKeyUnsafe(value: string){
    // Unsafe way. Do not do this! Use Renderer2 instead
    this.values.push(value)
    this.myInput.nativeElement.value = ''
    if(this.values.length > 4) {
      this.myInput.nativeElement.setAttribute('disabled','true')
    }

  }

}
