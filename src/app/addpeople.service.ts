import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddpeopleService {
  constructor(private http:HttpClient) { }
  student(user){
  return this.http.post('http://localhost:3000/addstudent',user);

}
faculty(user){
  return this.http.post('http://localhost:3000/addfaculty',user);
}}

