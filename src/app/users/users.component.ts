import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from '../shared/model/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] ;
  constructor(private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  this.getAll();
}

getAll(): void {
  this.userService.getAll().subscribe(data => {
    this.users = data;
   },
   ex =>{
   console.log(ex);
   });
}
delete (id: number, event : any): void{
  this.confirmationService.confirm({
    target: event.target,
    message: 'Are you sure that you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.userService.delete(id).subscribe(res => {

        if (res.success){
          this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
          this.getAll();
        } else{
          this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
        }
        }, ex =>{
          this.messageService.add({severity: 'error', summary: 'erreur' ,detail:'Operation effectué  avec succes'});
        
        console.log(ex);
        
        
          })
    },
    
});


}
}