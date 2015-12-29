System.register(['angular2/core', './mutant-detail.component', './mutant.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mutant_detail_component_1, mutant_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mutant_detail_component_1_1) {
                mutant_detail_component_1 = mutant_detail_component_1_1;
            },
            function (mutant_service_1_1) {
                mutant_service_1 = mutant_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_mutantService) {
                    this._mutantService = _mutantService;
                    this.title = 'Mutant Database';
                }
                AppComponent.prototype.onSelect = function (mutant) {
                    console.log(mutant);
                    this.selectedMutant = mutant;
                };
                AppComponent.prototype.getMutants = function () {
                    var _this = this;
                    this._mutantService.getMutantsSlowly().then(function (mutants) { return _this.mutants = mutants; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getMutants();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title}}</h1>\n        <h2>Mutants</h2>\n        <img *ngIf=\"!mutants\" src=\"loader.gif\" alt=\"Loading&hellip;\">\n        <ul class=\"mutants\">\n            <li *ngFor=\"#mutant of mutants\"\n                [class.selected]=\"mutant === selectedMutant\"\n                (click)=\"onSelect(mutant)\">\n                <span class=\"badge\">{{mutant.id}}</span> {{mutant.name}}\n            </li>\n        </ul>\n        <mutant-detail [mutant]=\"selectedMutant\"></mutant-detail>\n    ",
                        styles: ["\n        .mutants {list-style-type: none; margin-left: 1em; padding: 0; width: 15em;}\n        .mutants li { cursor: pointer; }\n        .mutants li:hover {color: #369; background-color: #EEE; }\n        .mutants .badge {\n            font-size: small;\n            color: white;\n            padding: 0.1em 0.7em;\n            background-color: #369;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -1px;\n        }\n        .selected { background-color: #EEE; color: #369; }\n        .selected .badge { background-color: #333; }\n    "],
                        directives: [mutant_detail_component_1.MutantDetailComponent],
                        providers: [mutant_service_1.MutantService]
                    }), 
                    __metadata('design:paramtypes', [mutant_service_1.MutantService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map