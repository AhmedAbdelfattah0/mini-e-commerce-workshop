import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.scss']
})
export class CustomModelComponent implements OnInit {
url:any=''
  constructor(public sanitizer: DomSanitizer,@Inject(MAT_DIALOG_DATA) public data:any) {
     this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data);

  }


  ngOnInit(): void {
  }

}
