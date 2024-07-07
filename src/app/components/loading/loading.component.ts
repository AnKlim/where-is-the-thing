import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/store/AppState';
import { ILoadingState } from 'src/store/loading/ILoadingState';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent  implements OnInit {

  loadingState$: Observable<ILoadingState>;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.loadingState$ = this.store.select('loading');
  }

}
