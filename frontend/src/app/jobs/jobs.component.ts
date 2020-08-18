import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { Job } from '../jobsobj';

@Component({
    selector: 'jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css'],
  })

export class jobsComponent {
    public jobs: Job[] = [];

    constructor(private dataService: DataService) {
        this.dataService.get_jobs().subscribe((res : Job[])=>{
            this.jobs = res;
            console.log(res)
          });
    }
}
