import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/classes/client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private http=inject(HttpClient);

  getAllClients():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+"GetAllClients")
  }

  getAllEmployees():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+'GetAllEmployee');
  }

  addUpdate(obj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+"AddUpdateClient",obj)
  }

  deleteClientById(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+"DeleteClientByClientId?clientId="+id)
  }

  addClientProjectUpdate(obj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+"AddUpdateClientProject",obj)
  }
}
