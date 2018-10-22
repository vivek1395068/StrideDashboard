import { Component,OnInit } from '@angular/core';
import {DashboardDataService} from "./dashboard-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private dashboardDataService:DashboardDataService){

  }

  title = 'stridedashboard';
  data=null;
  data1="HK !!!!";
  documents=null;
  sortArrayValues={
    set_id:true,
    doc_id:true
  }

  updateData(data){
    this.data=data;
  }

  sortFunction(type,i){
    switch(type){
      case "set_id":
      this.data[i].documents.sort((a, b) =>{
        return this.sortArrayValues.set_id?parseFloat(a.set_id) - parseFloat(b.set_id):parseFloat(b.set_id) - parseFloat(a.set_id)
      });
      this.sortArrayValues.set_id= !this.sortArrayValues.set_id
        break;

      case "doc_id":
      this.data[i].documents.sort((a, b) =>{
        return this.sortArrayValues.doc_id?parseFloat(a.doc_id) - parseFloat(b.doc_id):parseFloat(b.doc_id) - parseFloat(a.doc_id)
      });
      this.sortArrayValues.doc_id= !this.sortArrayValues.doc_id
      break;

      case "name":
      this.data[i].documents.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
          return -1 
        if (nameA > nameB)
          return 1
        return 0
      })

      case "status":
      this.data[i].documents.sort(function(a, b){
        var nameA=a.status.toLowerCase(), nameB=b.status.toLowerCase()
        if (nameA < nameB)
          return -1 
        if (nameA > nameB)
          return 1
        return 0
      })

      case "uploader":
      this.data[i].documents.sort(function(a, b){
        var nameA=a.uploader.toLowerCase(), nameB=b.uploader.toLowerCase()
        if (nameA < nameB)
          return -1 
        if (nameA > nameB)
          return 1
        return 0
      })

      case "preview_url":
      this.data[i].documents.sort(function(a, b){
        var nameA=a.preview_url.toLowerCase(), nameB=b.preview_url.toLowerCase()
        if (nameA < nameB)
          return -1 
        if (nameA > nameB)
          return 1
        return 0
      })

      case "date_uploaded":
      this.data[i].documents.sort(function(a, b){
        var nameA=a.date_uploaded.toLowerCase(), nameB=b.date_uploaded.toLowerCase()
        if (nameA < nameB)
          return -1 
        if (nameA > nameB)
          return 1
        return 0 
      })
    }
  }

  ngOnInit(){

    this.dashboardDataService.fetchData(this.updateData.bind(this));
    
  }
}
