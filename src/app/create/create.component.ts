import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url) {
    // this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) );
    this.store.dispatch({
      type: '[TUTORIAL] Add',
      payload: <Tutorial>{
        name: name,
        url: url
      }
    });
  }

  ngOnInit() {
    this.store
    .select<any>((state: any) => state) // the complete state this time!!!
    .subscribe((completeState: any) => console.log(completeState));
  }

}
