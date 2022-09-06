import { Subject } from "rxjs";

export class AppareilService{
  appareilsSubject = new Subject<any[]>();
  private  appareils =[
        {
          id : 1,
          name: "Machine á laver ",
          status : "éteint" 
        },
        {
          id : 2,
          name: "Television ",
          status : "allumé" 
        },
        {
          id : 3,
          name: "Ordinateur ",
          status : "éteint" 
        },
        {
          id : 4,
          name: "Lampe",
          status : "allumé" 
        },
    
      ]
    
      emitAppareilSubject(){
        this.appareilsSubject.next(this.appareils.slice());
      }

      getAppareilById(id : number){
        const appareil : any  =  this.appareils.find(
          (appareilObject) =>{
            return appareilObject.id === id
          }
        )

        return appareil;
      }  

    swithOnAll(){
        for(let appareil of this.appareils){
                appareil.status="allumé"
        }
        this.emitAppareilSubject();
    }

    swithOnOne(index: number){
        this.appareils[index].status = "allumé";
        this.emitAppareilSubject();

    }

    swithOffOne(index: number){
        this.appareils[index].status = "éteint";
        this.emitAppareilSubject();

    }
    
    swithOfAll(){
        for(let appareil of this.appareils){
                appareil.status="éteint";
        }
        this.emitAppareilSubject();

    }  
}