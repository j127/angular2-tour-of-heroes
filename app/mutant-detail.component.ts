import {Component} from 'angular2/core';
import {Mutant} from './mutant';

@Component({
    selector: 'mutant-detail',
    template: `
        <h3>Mutant Editor</h3>
        <p>Click on a mutant to edit its name.</p>
        <div *ngIf="mutant">
            <h2>{{mutant.name}}</h2>
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