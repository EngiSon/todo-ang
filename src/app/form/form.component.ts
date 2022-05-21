import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  create!: boolean;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.url.subscribe(e => {
      this.create = e[0].path === 'create';
    })
  }



}
