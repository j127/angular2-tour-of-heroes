System.register(['angular2/core', "./mock-mutants"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_mutants_1;
    var MutantService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_mutants_1_1) {
                mock_mutants_1 = mock_mutants_1_1;
            }],
        execute: function() {
            MutantService = (function () {
                function MutantService() {
                }
                MutantService.prototype.getMutants = function () {
                    return Promise.resolve(mock_mutants_1.MUTANTS);
                };
                // Simulate server latency
                MutantService.prototype.getMutantsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_mutants_1.MUTANTS); }, 2000);
                    });
                };
                MutantService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MutantService);
                return MutantService;
            })();
            exports_1("MutantService", MutantService);
        }
    }
});
//# sourceMappingURL=mutant.service.js.map