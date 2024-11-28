import { Component, inject, OnInit } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designations',
  standalone: true,
  imports: [],
  templateUrl: './designations.component.html',
  styleUrl: './designations.component.css'
})
export class DesignationsComponent implements OnInit{

  designationList:IDesignation[]=[];

  masterService=inject(MasterService);

  ngOnInit(): void {
      this.masterService.getAllDesignations().subscribe((res:APIResponseModel)=>{
         this.designationList=res.data;
      },error=>{
        alert("API error / Network Down")
      })
  }
}
