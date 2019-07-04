import { Component, OnInit } from '@angular/core';
//import { Router} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gohome()
  {
    this.router.navigateByUrl("home")
  }
  gonews()
  {
    this.router.navigateByUrl("news")
  }
  gosign()
  {
    this.router.navigateByUrl("login")
  }
  goabout()
  {
    this.router.navigateByUrl("about")
  }
  gosignup()
  {
    this.router.navigateByUrl("signup");
   }



}
