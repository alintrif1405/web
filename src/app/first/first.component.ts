import { Component } from '@angular/core';
import { Team } from '../Models/Team';
import { TeamService } from '../Services/team.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
team: any;

  constructor(private teamService: TeamService){}

  text:string = "Text aus der Variabile";
  showSecondRow:boolean = false;
   inputValue: string = '';
  teamsFromDB: Team[] = [];
  newTeamName: string = '';
  newTeamPlayers: number = 0;
  newTeamCoach:string='';
  teamNameToDelete: string = '';
  showList = false;
  toggleList() {
    this.showList = !this.showList;if (this.showList) {
          this.getTeams(); // Fetch the teams from the database if they haven't been fetched yet
        }
  }

  showMoreButtons(){
    this.showSecondRow = true;
  }

  showLessButtons(){
    this.showSecondRow = false;
  }
  
  getTeams(){
    this.teamService.getTeams().subscribe(result=>
      {
        this.teamsFromDB = result;
      });
  }
  addTeam(){
    let newTeam = {Name: this.newTeamName, Players: this.newTeamPlayers,Coach:this.newTeamCoach};
    this.teamService.addTeam(newTeam);
  }

}
