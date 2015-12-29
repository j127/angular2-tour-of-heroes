import {Component} from 'angular2/core';
import {Mutant} from './mutant';
import {MutantDetailComponent} from './mutant-detail.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>Mutants</h2>
        <ul class="mutants">
            <li *ngFor="#mutant of mutants"
                [class.selected]="mutant === selectedMutant"
                (click)="onSelect(mutant)">
                <span class="badge">{{mutant.id}}</span> {{mutant.name}}
            </li>
        </ul>
        <mutant-detail [mutant]="selectedMutant"></mutant-detail>
    `,
    styles:[`
        .mutants {list-style-type: none; margin-left: 1em; padding: 0; width: 15em;}
        .mutants li { cursor: pointer; }
        .mutants li:hover {color: #369; background-color: #EEE; }
        .mutants .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
        .selected .badge { background-color: #333; }
    `],
    directives: [MutantDetailComponent]
})

export class AppComponent {
    public title = 'Mutant Database';
    public mutants = MUTANTS;
    public selectedMutant: Mutant;

    onSelect(mutant: Mutant) {
        console.log(mutant);
        this.selectedMutant = mutant;
    }
}

var MUTANTS: Mutant[] = [
    {'id': 1, 'name': 'Aardvark Dog'},
    {'id': 2, 'name': 'Fire Lettuce'},
    {'id': 3, 'name': 'Coffee Cannibal'},
    {'id': 4, 'name': 'Zorkinator'},
    {'id': 5, 'name': 'Lightbulb Lizard'},
    {'id': 6, 'name': 'Water Weird'},
    {'id': 7, 'name': 'Beerwok'},
    {'id': 8, 'name': 'The Lightning'},
    {'id': 9, 'name': 'Storm Kitten'},
    {'id': 10, 'name': 'Scorpion Worm'},
    {'id': 11, 'name': 'Transpiler Doe'},
    {'id': 12, 'name': 'Pegacat'}
];
