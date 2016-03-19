import {Component, Input} from 'angular2/core';

import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import Logger from "../../utils/logger.service";

@Component({
  selector: 'fab',
  template: require('./fab.html'),
  styles: [require('./fab.scss').toString()],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

export class Fab {

  @Input('test')
  public test: string;

  @Input('sub-actions')
  public subActions: ISubAction[];

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
}

export interface ISubAction {
  id: string;
  icon: string;
  classes?: string[];
  onClick: (string) => void;
}
