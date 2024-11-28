import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationsComponent } from '../designations/designations.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent,DesignationsComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponent:string='';

  changeTab(tabName:string){
    this.currentComponent=tabName;
  }

  items:Array<String>=[];

  addItem(){
    this.items.push('Item Added Successfully');
  }
}
