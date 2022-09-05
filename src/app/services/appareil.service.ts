import { Subject } from "rxjs";

export class AppareilService{

 // appareilSubject = new Subject() |  any ;

     appareils =[
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
    
      ]
    
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
    }

    swithOnOne(index: number){
        this.appareils[index].status = "allumé"
        
    }

    swithOffOne(index: number){
        this.appareils[index].status = "éteint"
        
    }
    
    swithOfAll(){
        for(let appareil of this.appareils){
                appareil.status="éteint"
        }
    }  
}