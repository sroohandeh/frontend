import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/models/constant/urls';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'User'
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  user = new User();
  
  constructor(private http:HttpClient, private toastrService: ToastrService) { 
    this.userObservable = this.userSubject.asObservable();
  }

  
  ngOnInit(): void {
    console.log('user', this.user);
  }

  login(userLogin: IUserLogin):Observable<User>{

    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(`Welcome to FoodMine {{user.name}}!`, 'Login Successful');
        },
        error: (err) =>{
          this.toastrService.error(err.error)
        }
      })
    )

  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem('USER_KEY');
    window.location.reload();
  }

  setUserToLocalStorage(user: User){
    localStorage.setItem('USER_KEY', JSON.stringify(user));
  }
  
  getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
     if(userJson) return JSON.parse(userJson);
     return new User();
  }
}
