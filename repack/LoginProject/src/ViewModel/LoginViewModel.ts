import { Subject } from "rxjs";

export class LoginViewModel{
  
  private observable: Subject<boolean>;

  private static instance = new LoginViewModel();

  public static getInstance(){
    return LoginViewModel.instance;
  }

  private constructor(){
    this.observable = new Subject<boolean>();
  }

  public subscribe(callback:(value: boolean) => void){
    return this.observable.subscribe(callback)
  }

  public setLogged(value:boolean){
    this.observable.next(value)
  }

}
