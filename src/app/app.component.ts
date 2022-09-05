import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

//import 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit , OnDestroy {
  
  secondes !: number | number ;
  counterSubscription : Subscription | undefined  ;

  constructor(){}  


  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
  }


  ngOnInit(): void {
    //const counter  = Observable.intervale(1000);
    const secondsCounter = interval(1000);
    this.counterSubscription = secondsCounter.subscribe(  (value :number) => {
      this.secondes = value;
    })




    // secondsCounter.subscribe(
    //   (value :number) => {
    //     this.secondes = value;
    //   }, (error : any) =>{
    //     console.log("Erreurs");
        
    //   }, ()=>{
    //     console.log("Observable completé !!");
        
    //   }
    // )


  }








  // title = 'Blandine balde';
  // isAuth = false ;
  // lastUpdate = new Promise<Date>(
  //   (resolve, reject) => {
  //     const date = new Date();
  //     setTimeout(
  //       ()=>{
  //         resolve(date); 3000
  //       }
  //     );
  //   }
  // )
   
  // appareils: any[] = []; 
  
  // constructor(private appareilService: AppareilService ){
  //   setTimeout(
  //     () => {
  //         this.isAuth = true;
  //     } , 4000
  //   );
  // }
  // ngOnInit(): void {
  //   this.appareils = this.appareilService.appareils 
  // }

  // onAllumer(){
  //   this.appareilService.swithOnAll();
  // }

  // onEteindre(){
  //   this.appareilService.swithOfAll();
  // }
}
