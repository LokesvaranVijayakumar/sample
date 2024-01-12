import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    
  }
  ngDoCheck(): void {
    
    if(this.childTitle.length>this.noOfTitles){
      console.log('ngDoCheck called');
      console.log('modifying the original value');
      this.noOfTitles++;
    }
    
  }
  @Input() childTitle:string[]=[];
  noOfTitles=0;
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.childTitle.push('firsttitle');
    this.noOfTitles=1;
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if(!changes['childTitle'].isFirstChange()){
      // console.log('You are modifying the original value');
      console.log('ngOnChanges Called');
    }
    
    
  }

