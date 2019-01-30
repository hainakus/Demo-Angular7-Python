import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FauxApiService } from '../faux-api.service';
import { Faux } from '../models/faux';
@Component({
  selector: 'app-faux-list',
  templateUrl: './faux-list.component.html',
  styleUrls: ['./faux-list.component.scss']
})
export class FauxListComponent implements OnInit {
  fauxFiles:Faux[] = [];
  selectedFauxFiles:Faux[] = [];
  sort: Boolean = false;
  toogle: Boolean = false;
  cats:any[] = [];
  filterValue : Number = 0.5;
  @ViewChild("sidebar") sidebar: ElementRef<any>;
  @Output() selectCard: EventEmitter<any> = new EventEmitter();
  cat: any;
  faux: any = {};
  constructor(private ApiService:FauxApiService) { }

  ngOnInit() {
   
    this.ApiService.fauxList()
    .subscribe( ( faux:any ) => {
        this.fauxFiles = Object.values(faux.samples);
        this.fauxFiles = this.sortFauxness(this.fauxFiles);
        this.fauxFiles = this.showFaux(this.fauxFiles);
        this.selectedFauxFiles = this.fauxFiles;
        this.ApiService.categoryList()
        .subscribe( (cats:any[]) => {
          this.cats = cats['categories']
         this.cats.forEach( key => {
            this.faux[key] = this.filterCategoriesFiles(this.selectedFauxFiles, key);
          })
        })
    })
      
  }

  sortByFauxValue() {
    this.sort = !this.sort;
    (this.sort) ? this.selectedFauxFiles.sort( ( a, b ) =>  parseFloat(a.fauxness) - parseFloat(b.fauxness) ) : this.selectedFauxFiles.sort( ( a, b ) =>  parseFloat(b.fauxness) - parseFloat(a.fauxness) ) 
  }

  filterByFauxValue( value ) {

    let selected:Faux[] = [];
    if(this.cat != 'All' && this.cat != undefined) {
 
      selected = this.faux[this.cat].filter( file => {
        return file.fauxness >= value
      });
      this.selectedFauxFiles = selected;
  
    } else {
    selected = this.fauxFiles.filter( file => {
      return file.fauxness >= value
    });
    this.selectedFauxFiles = selected;
    } 
  }

  toogleSidebar() {
    this.toogle = !this.toogle;
    (this.toogle) ? this.sidebar.nativeElement.classList.add("toggled") : this.sidebar.nativeElement.classList.remove("toggled");
  }

  filterByCategory( cat:any ) {
    this.cat = cat;
    if(cat == 'All'){    
      this.selectedFauxFiles = this.fauxFiles;
      this.filterValue = Math.max.apply(Math, this.selectedFauxFiles.map( ( item ) => { return this.getPercentage(parseFloat(item.fauxness)); }))
    } else {
      this.selectedFauxFiles = this.filterCategoriesFiles(this.fauxFiles, cat);
      this.faux[cat] = this.selectedFauxFiles;
      this.filterValue = Math.max.apply(Math, this.faux[cat].map( ( item ) => { return this.getPercentage(parseFloat(item.fauxness)); }))
    }  
  }

  getPercentage( value ) {
    return Math.round(value*100)/100;
  }
  onFauxSelect(id){
    let fauxObj:Faux;
   fauxObj = this.selectedFauxFiles.find( faux => {
      return faux.sample_id === id
    })
   
    this.selectCard.emit(fauxObj)
  }
  deleteFaux(obj) {

    obj.active = false;
    this.selectedFauxFiles = this.showFaux(this.selectedFauxFiles)
    console.log(obj);
  }
  private filterCategoriesFiles( objArr:Faux[], cat:String ) {
    let categories: Faux[] = [];
    categories = objArr.filter( file => {
      if(file.category_guess == cat) return file ;  
    });
    categories = this.sortFauxness(categories);
    return categories;
  }

  private sortFauxness(arr:Faux[]) {
    return arr.sort( ( a, b ) =>   parseFloat(b.fauxness) - parseFloat(a.fauxness)) 
  }

  private showFaux(arr:Faux[]) {
   let files: Faux[] = []; 
   files = arr.filter( file => {
      if (file.active === true) return file;
    })
    return files;
  }
}
