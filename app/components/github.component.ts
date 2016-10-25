import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    providers: [ GithubService ]
})
export class GithubComponent {
    constructor(private _githubService:GithubService) {
        console.log('Github component init...');
    }
}