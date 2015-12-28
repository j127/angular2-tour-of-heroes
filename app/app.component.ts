import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}}</h2>
        <div><label>ID: </label>{{hero.id}}</div>
        <div>
            <label>Name: </label>
            <div><input value="{{hero.name}}" placeholder="Name&hellip;"></div>
        </div>
    `
})

export class AppComponent {
    public hero: Hero = {
        id: 1,
        name: 'Aardvark Dog'
    };
    public title = 'Superhero Database';
}
