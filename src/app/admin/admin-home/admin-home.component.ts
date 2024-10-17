import { Component, OnInit } from '@angular/core';
//import fs from "fs";
//import { parse } from "csv-parse";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit  {
  
  constructor(

  ) {

  }
  
  ngOnInit(): void {
    
    // fs.createReadStream("")
    // .pipe(parse({delimiter: ",", from_line: 2}))
    // .on("data", function(row) {
    //   console.log(row)
    // })
    // .on("end", function() {
    //   console.log(row)
    // })
  }
  

}
