import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  
  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project(); 
  editIndex: any = null;
  deleteProject: Project = new Project(); 
  deleteIndex: any = null;
  searchBy: string = "ProjectName";
  searchText: string = "";

  constructor(private projectService:ProjectsService) {

  }
  
  ngOnInit() {
    this.projectService.getAllProject().subscribe({
     next: (response:Project[]) => {
        this.projects = response;
      },
      error: (err) => {
        console.log(err,"pc err-->")
      }
    });
  }
  onSaveClick() {
    this.projectService.insertProject(this.newProject).subscribe(
      (response) => {
        // add project to grid
        var p: Project = new Project;
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        // clear new Projec Dialog -text boxes
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.teamSize = null;
        this.newProject.dateOfStart = null;
      }
    );
  }
  onEditClick(event:any,index:number) {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editIndex = index;
  }

  onUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe(
      (response: Project) => {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.teamSize = response.teamSize;
        p.dateOfStart = response.dateOfStart;
        this.projects[this.editIndex] = p;


        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.teamSize = null;
        this.editProject.dateOfStart = null;


       },
    )
  }

  onDeleteClick(event:any,index:number) {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
  }

  onDeleteConfirmClick() {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.teamSize = null;
        this.deleteProject.dateOfStart = null;

      }
    )
  }

  onSearchClick() {
    this.projectService.searchProject(this.searchBy, this.searchText).subscribe(
      (response: Project[]) => {
        console.log("Calling..")
        this.projects = response;
    }
  )
}

}
