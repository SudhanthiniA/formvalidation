import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
url='https://627921bf6ac99a91066307ee.mockapi.io/fields';
  constructor(private http:HttpClient) {}
    getData(){
      return this.http.get(this.url);
      // return this.http.get("https://61bb47cbe943920017784d9f.mockapi.io/registration");
    }
    saveData(data: any){
console.log(data);
return this.http.post(this.url,data);
    }
}
