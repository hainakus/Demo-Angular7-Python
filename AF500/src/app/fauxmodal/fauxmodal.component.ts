import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Faux } from '../models/faux';
import { FauxApiService } from '../faux-api.service';
declare var $:any;
@Component({
  selector: 'app-fauxmodal',
  templateUrl: './fauxmodal.component.html',
  styleUrls: ['./fauxmodal.component.scss']
})
export class FauxmodalComponent implements OnInit {
  @Input() object: Faux;
  cats:any[];
  constructor(private ApiService:FauxApiService) { 
   
   
  }

  ngOnInit() {
   this.ApiService.categoryList()
    .subscribe( (cats:any[]) => {
      this.cats = cats['categories'];
   })
    
  }

  updateFaux() {

    this.ApiService.updateFaux(this.object)
      .subscribe( res => console.log(res))
      $(`#${this.object.sample_id}`).modal('toggle');

  }
}
