import { Component, OnInit } from '@angular/core';


export interface announcement {
  id: number,
  content: string
}
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  announcements: announcement[] = [
    {id: 1, content: 'Dear students, parent-teacher meeting on jun 14th.'},
    {id: 2, content: 'Annual Day celebrations coming up, please be sure to register.'}
  ]

}
