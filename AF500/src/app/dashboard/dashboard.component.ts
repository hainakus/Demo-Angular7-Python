import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { FauxmodalComponent } from '../fauxmodal/fauxmodal.component';
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  componentRef: any;

  @ViewChild('modal', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private renderer2: Renderer2) { }
  
  ngOnInit() {
  }

  createComponent(obj) {

      this.entry.clear();

      const factory = this.resolver.resolveComponentFactory(FauxmodalComponent);

      this.componentRef = this.entry.createComponent(factory);

      this.componentRef.instance.object = obj;
     
      console.log(this.componentRef)
     
  }

  destroyComponent() {

      this.componentRef.destroy();

  }


  getCard(faux){
    this.createComponent(faux);
    console.log(faux)
    setTimeout(function(){
      $(`#${faux.sample_id}`).modal('show');
  }, 300);
  }
}
