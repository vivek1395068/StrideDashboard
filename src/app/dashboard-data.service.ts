import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() { 
    //this.fetchData();
  }
  data=null;
  fetchData(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=()=>{
      if(xhttp.status===200 && xhttp.readyState===4){
        this.data=JSON.parse(xhttp.responseText);
        callback(this.data)
        
      }
    }
    xhttp.open("GET","assets/store/dashboard.json",true);
    xhttp.send();
  }
}
