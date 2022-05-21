import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  create!: boolean;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.url.subscribe(e => {
      this.create = e[0].path === 'create';
    })
  }



}
