import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  query(): Course[]{
    return [
      { id: '1', name: 'Angular', category: 'Front-end' }
    ];
  }

}
