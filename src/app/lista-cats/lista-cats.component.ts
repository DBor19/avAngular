
import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-lista-cats',
  templateUrl: './lista-cats.component.html',
  styleUrls: ['./lista-cats.component.css']
})
export class ListaCatsComponent implements OnInit {
  

  constructor(private catsService: CatsService) {}
  cats: any = [];

  ngOnInit(): void {
    this.catsService.getCats().subscribe(data => {
      this.cats =data;
    });
  }
}
