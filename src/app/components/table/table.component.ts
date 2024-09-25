import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


interface Song {
  title: string;
  artist: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  songs: Song[] = [
    { title: 'Alexander Hamilton', artist: 'Lin Manuel Miranda' },
    { title: 'Aaron Burr, Sir', artist: 'Lin Manuel Miranda' },
    { title: 'Schuyler Sisters', artist: 'Lin Manuel Miranda' },
    { title: 'The story of tonight', artist: 'Lin Manuel Miranda' },
    { title: 'Farmer Refuted', artist: 'Lin Manuel Miranda' },
    { title: 'You’ll be back', artist: 'Lin Manuel Miranda' },
    { title: 'Right Hand Man', artist: 'Lin Manuel Miranda' },
    { title: 'A winter’s Ball', artist: 'Lin Manuel Miranda' }
  ];
  displayedColumns: string[] = ['title', 'artist'];
}
