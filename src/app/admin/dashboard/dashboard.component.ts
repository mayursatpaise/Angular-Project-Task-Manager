import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from 'src/app/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation?: string = "";
  Username?: string = "";
  NoOfTeamMember?: number = 0;
  TotalCostOfAllProject?: number = 0;
  PendingTask?: number = 0;
  UpcomingProjects?: number = 0;
  ProjectCost?: number = 0;
  currentExpenditure?: number = 0;
  AvailableFunds?: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number []= [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  Today: any = '';


  constructor(private dashboardService:DashboardServiceService) {
  
}

ngOnInit():void {
  this.Designation = "Team Leader";
  this.Username = "mayur nanda";
  this.NoOfTeamMember = 5;
  this.PendingTask = 4;
  this.ProjectCost = 42342;
  this.TotalCostOfAllProject = 4324234234;
  this.UpcomingProjects = 4;
  this.currentExpenditure = 453452;
  this.AvailableFunds = 53456;

  this.Clients = [
    "ABC infotech Ltd", "DEF Software Solution", "abh Industries"
  ];

  this.Projects = [
    "Project A", "Project B", "Project C", "Project D"
  ];

  for (var i = 2019; i >= 2010; i--) {
    this.Years.push(i); 
  }

  this.TeamMembersSummary =  this.dashboardService.getTeamMemberSummary();
  this.TeamMembers = [
    {
      Region: "East",
      member: [
        { ID: 1, Name: 'Ford', status: "Available" },
        { ID: 1, Name: 'varun', status: "Available" },
        { ID: 1, Name: 'pratik', status: "Busy" },
        { ID: 1, Name: 'Ritesh', status: "Busy" },
      
      ]
    
    },
    {
      Region: "West",
      member: [
        { ID: 1, Name: 'Ford', status: "Available" },
        { ID: 1, Name: 'varun', status: "Available" },
        { ID: 1, Name: 'pratik', status: "Busy" },
        { ID: 1, Name: 'Ritesh', status: "Busy" },
      
      ]
    
    },
    {
      Region: "North",
      member: [
        { ID: 1, Name: 'Ford', status: "Available" },
        { ID: 1, Name: 'varun', status: "Available" },
        { ID: 1, Name: 'pratik', status: "Busy" },
        { ID: 1, Name: 'Ritesh', status: "Busy" },
      
      ]
    
    },
    {
      Region: "South",
      member: [
        { ID: 1, Name: 'Ford', status: "Available" },
        { ID: 1, Name: 'varun', status: "Available" },
        { ID: 1, Name: 'pratik', status: "Busy" },
        { ID: 1, Name: 'Ritesh', status: "Busy" },
      
      ]
    
    }
  ];
this.Today = new Date();

}

  onProjectChanage($event: any) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 76823;
      this.currentExpenditure = 73462;
      this.AvailableFunds = 52342;

    } else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 54823;
      this.currentExpenditure = 67462;
      this.AvailableFunds = 88342;
    }else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 523;
      this.currentExpenditure = 462;
      this.AvailableFunds = 56342;
    }else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 423;
      this.currentExpenditure = 5462;
      this.AvailableFunds = 342;
    }
    
  }
}
