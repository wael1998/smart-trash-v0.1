import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  constructor(private http : HttpClient) { }

  postProduct(data : any){
    return this.http.post<any>("http://localhost:3000/productList/",data);
  }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/");
  }
  putProduct(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/productList/"+id, data);

  }
  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
  }




  postTruck(data : any){
    return this.http.post<any>("http://localhost:3000/truckList/",data);
  }
  getTruck(){
    return this.http.get<any>("http://localhost:3000/truckList/");
  }
  putTruck(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/truckList/"+id, data);

  }
  deleteTruck(id:number){
    return this.http.delete<any>("http://localhost:3000/truckList/"+id);
  }




  

  postTrush(data : any){
    return this.http.post<any>("http://localhost:3000/trushList/",data);
  }
  getTrush(){
    return this.http.get<any>("http://localhost:3000/trushList/");
  }
  putTrush(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/trushList/"+id, data);

  }
  deleteTrush(id:number){
    return this.http.delete<any>("http://localhost:3000/trushList/"+id);
  }
}

