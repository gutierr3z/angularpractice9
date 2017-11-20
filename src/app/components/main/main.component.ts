import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users:string[];
  flag1:boolean = true;

  constructor( public dataService:DataService ) { 

    this.dataService.getUsers().subscribe( usersx => {
      console.log( usersx );
      this.users = usersx;
    });
  }

  ngOnInit() {
  }

}
