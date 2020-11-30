import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { EventServiceService } from 'src/app/services/event-service.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{

  @ViewChild(MatSort , {static: true}) sort:MatSort;
  @ViewChild(MatPaginator , {static: true}) paginator:MatPaginator;

  eventList: Array<Event>
 
 displayedColumns: string[] = ['name', 'location', 'date', 'website']; 
  dataSource: MatTableDataSource<Event> = new MatTableDataSource();

  constructor(private eventService:EventServiceService) { 
     this.addComputeworld()
     this.addTechmeme()
  }

  ngOnInit() { 
    this.allEvents()
  }

  
    addComputeworld(){
    this.eventService.addComputerworldData().subscribe(data=>{
      console.log("Computerworld data");
    }, err=>{
      console.log("Error saving Computerworld data to database");
    });
  }

  addTechmeme(){
    this.eventService.addTechmemeData().subscribe(data=>{
      console.log("Techmeme data");
    }, err=>{
      console.log("Error saving Techmeme data to database");
    });
  }

  allEvents(){
    this.eventService.findAllEvents().subscribe(data =>{
      this.eventList=data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }, err=>{
       console.log("Error loading events list");
    });
  }

  search(search:string){
    this.dataSource.filter = search.trim().toLocaleLowerCase();
  }


}
