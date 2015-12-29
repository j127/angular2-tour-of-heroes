import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Mutant} from './mutant';
import {MutantDetailComponent} from './mutant-detail.component';
import {MutantService} from './mutant.service';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                <h1>{{title}}</h1>
                    <h2>Mutants</h2>
                    <img *ngIf="!mutants" src="loader.gif" alt="Loading&hellip;">
                    <ul class="mutants">
                        <li *ngFor="#mutant of mutants"
                            [class.selected]="mutant === selectedMutant"
                            (click)="onSelect(mutant)">
                            <span class="badge">{{mutant.id}}</span> {{mutant.name}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-8">
                    <mutant-detail [mutant]="selectedMutant"></mutant-detail>
                </div>
            </div>
        </div>
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
    directives: [MutantDetailComponent],
    providers: [MutantService]
})

export class AppComponent implements OnInit {
    constructor(private _mutantService: MutantService) { }
    public title = 'Mutant Database';
    public mutants: Mutant[];
    public selectedMutant: Mutant;

    onSelect(mutant: Mutant) {
        console.log(mutant);
        this.selectedMutant = mutant;
    }
    getMutants() {
        this._mutantService.getMutantsSlowly().then(mutants => this.mutants = mutants);
    }
    ngOnInit() {
        this.getMutants();
    }
}
