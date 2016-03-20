import {Component, Input, ViewChildren, QueryList} from 'angular2/core';

import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import Logger from "../../utils/logger.service";
import {NgClass} from 'angular2/common';
import {FabSubAction} from '../fab-sub-action/fab-sub-action';

@Component({
  selector: 'fab',
  template: require('./fab.html'),
  styles: [require('./fab.scss').toString()],
  providers: [],
  directives: [ROUTER_DIRECTIVES, NgClass, FabSubAction],
  pipes: []
})

export class Fab {


  private _log: Logger = new Logger('Fab');
  private _debug = this._log.debug('debug');

  private isExpanded: boolean = false;

  constructor(http: Http) {
    this._log.debug('constructor')('test log constructor');
    ;
  }

  public onClick() {
    this.isExpanded = !this.isExpanded;

  }

  ngAfterViewInit() {
    // available here
  }
}

export interface IAction {
  id: string;
  text: string;
  classes?: string[];
  onClick: (string) => void;
}
