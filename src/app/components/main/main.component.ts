import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users:string[];

  constructor( public dataService:DataService ) { 

    this.dataService.getUsers().subscribe( users => {
      console.log( users );
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
