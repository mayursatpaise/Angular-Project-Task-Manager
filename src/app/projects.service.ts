import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url: string = "http://localhost:9090/";
  constructor(private httpClient:HttpClient) { 

  }

  getAllProject(): Observable<Project[]> {
    
    var currentUser = { token: "" };
    var headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer");
    if (sessionStorage.getItem('currentUser') != null) {
      currentUser = JSON.parse(sessionStorage['currentUser']);
      headers = headers.set("Authorization", "Bearer" + currentUser.token);
    }
    return this.httpClient.get<Project[]>(this.url + 'api/projects', { responseType: "json" })
      .pipe(map(
        (data: Project[]) => {
         
      for (var j = 0; j < data.length; j++){
        data[j].teamSize = data[j].teamSize * 100;
      }
       return data ;
    }))
  }

  insertProject(newProject:Project): Observable<Project>{
    return this.httpClient.post<Project>(this.url+'api/projects',newProject,{responseType:"json"});
  }

  updateProject(existingProject:Project): Observable<Project>{
    return this.httpClient.put<Project>(this.url + 'api/projects', existingProject,{responseType:"json"});
  }

  deleteProject(projectID: number): Observable<string>{
   return this.httpClient.delete<string>(this.url+"api/projects?ProjectID="+projectID,{responseType:"json"})
  }

  searchProject(searchBy: string, searchText: string): Observable<Project[]> {
    
    return this.httpClient.get<Project[]>(this.url + "api/projects/search/"+searchBy+"/"+searchText,{responseType:"json"})
  }



}
