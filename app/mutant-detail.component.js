System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MutantDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MutantDetailComponent = (function () {
                function MutantDetailComponent() {
                }
                MutantDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'mutant-detail',
                        template: "\n        <h2>Mutant Editor</h2>\n        <p>Click on a mutant to edit its name.</p>\n        <div *ngIf=\"mutant\">\n            <h2>{{mutant.name}}</h2>\n            <div><label>ID: </label>{{mutant.id}}</div>\n            <div>\n                <label>Name: </label>\n                <input [(ngModel)]=\"mutant.name\" placeholder=\"Name&hellip;\">\n            </div>\n        </div>\n    ",
                        inputs: ['mutant']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MutantDetailComponent);
                return MutantDetailComponent;
            })();
            exports_1("MutantDetailComponent", MutantDetailComponent);
        }
    }
});
//# sourceMappingURL=mutant-detail.component.js.map