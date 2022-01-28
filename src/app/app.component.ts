import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';


declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeshop';

  id = Math.floor(Math.random() * 10);


  constructor(private router: Router) {
    localStorage.setItem('userId', this.id.toString())
  }

  ngOnInit() {
      this.setUpAnalytics();
  }

  setUpAnalytics() {
      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe((event) => {
            console.log(event)
            if (event instanceof NavigationEnd){
                gtag('config', 'G-G3K9TW6MYG', {
                  page_path: event.urlAfterRedirects,
                  user_id: localStorage.getItem('userId')
                }
              );
            }
          });
    }
}
