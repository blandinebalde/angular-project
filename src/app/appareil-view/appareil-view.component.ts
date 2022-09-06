import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  title = 'Blandine balde';
  isAuth = false ;
  lastUpdate = new Promise<Date>(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date); 3000
        }
      );
    }
  )
   
  appareils: any[] = []; 
  appareilSubscription : Subscription | undefined ;
  
  constructor(private appareilService: AppareilService ){
    setTimeout(
      () => {
          this.isAuth = true;
      } , 4000
    );
  }
  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) =>{
        this.appareils = appareils;

      }
    )

    this.appareilService.emitAppareilSubject( )
  }

  onAllumer(){
    this.appareilService.swithOnAll();
  }

  onEteindre(){
    this.appareilService.swithOfAll();
  }

}
