import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/classes/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clientObj:Client=new Client();

  private clientService=inject(ClientService);

  clientList:Client[]=[];

  ngOnInit(): void {
      this.loadClient();
  }

  onSaveClient(){
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>
    {
      if(res.result){
        alert("Client Added Successfully")
        this.loadClient();
        this.clientObj=new Client();
      }else{
        alert(res.message)
      }
    })
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList=res.data;
    })
  }

  onDelete(id:number){
    const confDelete=confirm("Are you sure that you want to delete");

    if(confDelete){
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>
        {
          if(res.result){
            alert("Client Deleted Successfully")
            this.loadClient();
          }else{
            alert(res.message)
          }
        })
    }
  }


  onEdit(obj:Client){
    this.clientObj=obj;
  }




}
