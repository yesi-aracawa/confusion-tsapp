import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;',
  },
  animations: [flyInOut(), expand()],
})
export class AboutComponent implements OnInit {
  leaders: Leader[] = LEADERS;
  leaderErrMess: String;

  constructor(
    private leaderService: LeaderService,
    @Inject('baseURL') private baseURL
  ) {}

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(
      (leaders) => (this.leaders = leaders),
      (leaderErrmess) => (this.leaderErrMess = <any>leaderErrmess)
    );
  }
}
