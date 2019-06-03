import { Component, OnInit } from '@angular/core';

export interface Transaction {
  course: string;
  marks: number;
  grade: string;
}
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['course', 'marks', 'grade'];
  transactions: Transaction[] = [
    {course: 'Mathematics', marks: 40, grade: 'A'},
    {course: 'Social Studies', marks: 75, grade: 'B'},
    {course: 'Computer', marks: 92, grade: 'A'},
    {course: 'First Language', marks: 84, grade: 'B'},
    {course: 'General Knowledge', marks: 100, grade: 'A'},
    {course: 'General Science', marks: 95, grade: 'A'},
  ];

  /** Gets the total marks of all transactions. */
  getTotalMarks() {
    return this.transactions.map(t => t.marks).reduce((acc, value) => acc + value, 0);
  }
}