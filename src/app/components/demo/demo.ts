import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import {Demo1} from './../demo1/demo1';
import {Demo2} from './../demo2/demo2';
import Logger from '../../utils/logger.service';
import {FAB_DIRECTIVES} from '../fab/fab';

@Component({
  selector: 'demo',
  template: require('./demo.html'),
  styles: [require('./demo.scss').toString()],
  providers: [],
  directives: [ROUTER_DIRECTIVES, FAB_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  new Route({path: '/demo1', component: Demo1, name: 'Demo1', useAsDefault: true}),
  new Route({path: '/demo2', component: Demo2, name: 'Demo2'})
])

export class Demo {

  public isVertical: boolean = false;

  private _log: Logger = new Logger('Demo');

  public createComment(): void {
    this._log.debug('createComment')('clicked');
  }

  public createMail(): void {
    this._log.debug('createMail')('clicked');
  }

  public openCalendar(): void {
    this._log.debug('openCalendar')('clicked');
  }

  public toggleOrientation(): void {
    this.isVertical = !this.isVertical;
  }

  constructor(http: Http) {
    this._log.debug('constructor')('test log constructor');
  }
}
