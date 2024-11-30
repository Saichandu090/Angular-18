import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, IEmployee } from '../../model/interface/role';
import { Client } from '../../model/classes/client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  projectForm:FormGroup=new FormGroup({
    clientProjectId:new FormControl(0,[Validators.required]),
    projectName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    startDate:new FormControl('',[Validators.required]),
    expectedEndDate:new FormControl('',[Validators.required]),
    leadByEmpId:new FormControl('',[Validators.required]),
    completedDate:new FormControl('',[Validators.required]),
    contactPerson:new FormControl('',[Validators.required]),
    contactPersonContactNo:new FormControl('',[Validators.required]),
    totalEmpWorking:new FormControl('',[Validators.required]),
    projectCost:new FormControl('',[Validators.required]),
    projectDetails:new FormControl('',[Validators.required]),
    contactPersonEmailId:new FormControl('',[Validators.required,Validators.email]),
    clientId:new FormControl('')
  })

  clientService=inject(ClientService);

  employeeList:IEmployee[]=[];
  clientList: Client[]=[];

  ngOnInit(): void {
      this.getAllEmployee();
      this.getAllClients();
  }

  getAllEmployee(){
    this.clientService.getAllEmployees().subscribe((res:APIResponseModel)=>{
      this.employeeList=res.data;
    })
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList=res.data;
    })
  }

  onSaveProject(){
    const formValue=this.projectForm.value;
    debugger;
    this.clientService.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel)=>{
      if(res.result)
      {
        alert("project Created Successfully")
      }else{
        alert(res.message)
      }
    })
  }

}
