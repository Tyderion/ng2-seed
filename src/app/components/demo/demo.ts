import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import {Demo1} from './../demo1/demo1';
import {Demo2} from './../demo2/demo2';
import Logger from '../../utils/logger.service';
import {Fab, IAction} from '../fab/fab';
import {FabSubAction} from '../fab-sub-action/fab-sub-action';

@Component({
  selector: 'demo',
  template: require('./demo.html'),
  styles: [require('./demo.scss').toString()],
  providers: [],
  directives: [ROUTER_DIRECTIVES, Fab, FabSubAction],
  pipes: []
})

@RouteConfig([
  new Route({path: '/demo1', component: Demo1, name: 'Demo1', useAsDefault: true}),
  new Route({path: '/demo2', component: Demo2, name: 'Demo2'})
])

export class Demo {

  private _log: Logger = new Logger('Demo');

  private mainAction: IAction = {
    id: 'first',
    text: '',
    onClick: () => {
    },
    classes: ['fa', 'fa-share']
  };

  private actions: IAction[] = [
    {
      id: 'first',
      text: '',
      onClick: (id: string) => this._log.debug('first')('click'),
      classes: ['fa', 'fa-comment']
    },
    {
      id: 'second',
      text: '',
      onClick: (id: string) => this._log.debug('second')('click'),
      classes: ['fa', 'fa-envelope']
    }
  ];

  public createComment() {
    this._log.debug('createComment')('clicked');
  }

  public createMail() {
    this._log.debug('createMail')('clicked');
  }


  constructor(http: Http) {
    this._log.debug('constructor')('test log constructor');
    ;
  }
}
