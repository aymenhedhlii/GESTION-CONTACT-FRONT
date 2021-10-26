import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
user = new User();
confirmPwd: string;
  constructor(private userService: UserService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(): void{
    this.userService.add(this.user).subscribe(res =>{

if (res.success){
  this.messageService.add({severity: 'success', summary: res.message, detail: res.detail});
this.router.navigateByUrl('/users/list');
} else{
  this.messageService.add({severity: 'warn', summary: res.message, detail: res.detail});
}
}, ex =>{
  this.messageService.add({severity: 'error', summary: 'erreur' ,detail:'Operation effectué  avec succes'});

console.log(ex);

  });

}
}