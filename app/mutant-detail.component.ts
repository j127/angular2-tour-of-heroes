import {Component} from 'angular2/core';
import {Mutant} from './mutant';

@Component({
    selector: 'mutant-detail',
    template: `
        <h2>Mutant Editor</h2>
        <p>Click on a mutant to edit its name.</p>
        <div *ngIf="mutant">
            <h3>{{mutant.name}}</h3>
            <div><label>ID: </label>{{mutant.id}}</div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="mutant.name" placeholder="Name&hellip;">
            </div>
        </div>
    `,
    inputs: ['mutant']
})

export class MutantDetailComponent {
    public mutant: Mutant;
}