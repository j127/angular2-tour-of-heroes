import {HEROES} from './mock-mutants';
import {Injectable} from 'angular2/core';
import {MUTANTS} from "./mock-mutants";

@Injectable()

export class MutantService {
    getMutants() {
        return MUTANTS;
    }
}