import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import {Demo1} from './../demo1/demo1';
import {Demo2} from './../demo2/demo2';
import Logger from '../../utils/logger.service';
import {Fab, ISubAction} from '../fab/fab';

@Component({
  selector: 'demo',
  template: require('./demo.html'),
  styles: [require('./demo.scss').toString()],
  providers: [],
  directives: [ROUTER_DIRECTIVES, Fab],
  pipes: []
})

@RouteConfig([
  new Route({path: '/demo1', component: Demo1, name: 'Demo1', useAsDefault: true}),
  new Route({path: '/demo2', component: Demo2, name: 'Demo2'})
])

export class Demo {

  private _log: Logger = new Logger('Demo');

  private actions: ISubAction[] = [
    {
      id: 'first',
      icon: 'A',
      onClick: (id: string) => this._log.debug('first')('click')
    },
    {
      id: 'second',
      icon: 'B',
      onClick: (id: string) => this._log.debug('second')('click'),
      classes: ['one', 'two']
    }
  ];


  constructor(http: Http) {
    this._log.debug('constructor')('test log constructor');
    ;
  }
}
