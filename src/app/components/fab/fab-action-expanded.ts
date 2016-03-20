import {Component, Input, ViewChildren} from 'angular2/core';

import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import Logger from "../../utils/logger.service";
import {NgClass} from 'angular2/common';

@Component({
  selector: 'fab-action-expanded',
  template: '<ng-content></ng-content>',
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})

export class FabActionExpanded {
  constructor() {

  }
}
