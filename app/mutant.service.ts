import {Injectable} from 'angular2/core';
import {MUTANTS} from "./mock-mutants";

@Injectable()

export class MutantService {
    getMutants() {
        return Promise.resolve(MUTANTS);
    }

    // Simulate server latency
    getMutantsSlowly() {
        return new Promise<Mutant[]>(resolve =>
            setTimeout(()=>resolve(MUTANTS), 2000)
        );
    }
}