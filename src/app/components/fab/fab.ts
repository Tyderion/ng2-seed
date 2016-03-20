import {Component, Input, ViewChildren, QueryList, ViewChild, ContentChild, ContentChildren} from 'angular2/core';

import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import Logger from "../../utils/logger.service";
import {NgClass} from 'angular2/common';
import {FabActionExpanded} from './fab-action-expanded';
import {FabAction} from './fab-action';
import {FabSubAction} from './fab-sub-action';

@Component({
  selector: 'fab',
  template: require('./fab.html'),
  styles: [require('./fab.scss').toString()],
  providers: [],
  directives: [ROUTER_DIRECTIVES, NgClass, FabSubAction, FabActionExpanded, FabAction],
  pipes: []
})

export class Fab {

  private _log: Logger = new Logger('Fab');
  private _debug = this._log.debug('debug');

  private isExpanded: boolean = false;

  @ContentChildren(FabSubAction)
  public child: QueryList<FabSubAction>;


  @ContentChild(FabActionExpanded)
  public actionExpanded: FabActionExpanded;

  public hasExpandedAction: boolean = true;

  constructor(http: Http) {
    this._log.debug('constructor')('test log constructor');
    ;
  }

  public onClick() {
    this.isExpanded = !this.isExpanded;
  }

  public onSubActionClick() {
    this.isExpanded = false;
  }

  ngAfterContentInit() {
    this.hasExpandedAction = this.actionExpanded !== null;
    // available here
    this._debug(this.hasExpandedAction);

  }
}

export interface IAction {
  id: string;
  text: string;
  classes?: string[];
  onClick: (string) => void;
}
