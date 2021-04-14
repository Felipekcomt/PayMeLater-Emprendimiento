import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    window.location.reload();
  }

}
