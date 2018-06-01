import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
