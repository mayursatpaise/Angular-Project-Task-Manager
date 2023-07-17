import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  getTeamMemberSummary(): any[] {
    var TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 4, TemporarilyUnavailableMembers: 6 },
      { Region: "west", TeamMembersCount: 4, TemporarilyUnavailableMembers: 6 },
      { Region: "North", TeamMembersCount: 4, TemporarilyUnavailableMembers: 6 },
      { Region: "South", TeamMembersCount: 4, TemporarilyUnavailableMembers: 65 },
      
    ];
    return TeamMembersSummary;
}
}

