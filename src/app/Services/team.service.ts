import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Team } from '../Models/Team';
import {addDoc, collection, collectionData, deleteDoc, doc, DocumentData, Firestore, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where} 
                        from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  
  constructor(private fs: Firestore) { }

  getTeams():Observable<Team[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs, 'teams');
    return collectionData(myCollection);
  }

  addTeam(team:Team){
    const myCollection = collection(this.fs, 'teams')
    addDoc(myCollection, team);
  }
  
  
  
}
