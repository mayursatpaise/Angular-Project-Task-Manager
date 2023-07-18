import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url: string = "http://localhost:9090/";
  constructor(private httpClient:HttpClient) { 

  }

  getAllProject():Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url + 'api/projects', {responseType:"json"});
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
