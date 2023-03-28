import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  tabId: string;

  constructor(private activadRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activadRoute.queryParams.subscribe((params) => {
      this.tabId = params['TabIndex'];
    });
  }

  onTabChange(event: MatTabChangeEvent) {
    const url = `/details?TabIndex=${event.index}`;
    this.router.navigateByUrl(url);
  }
}
