import {Component, Input, QueryList, ContentChild, ContentChildren} from 'angular2/core';

import Logger from '../../utils/logger.service';
import {NgClass} from 'angular2/common';
import {FabActionExpanded} from './fab-action-expanded';
import {FabAction} from './fab-action';
import {FabSubAction} from './fab-sub-action';

@Component({
  selector: 'fab',
  template: require('./fab.html'),
  styles: [require('./fab.scss').toString()],
  providers: [],
  directives: [NgClass, FabSubAction, FabActionExpanded, FabAction],
  pipes: []
})

export class Fab {

  @Input('vertical')
  public isVertical: boolean = false;

  private _log: Logger = new Logger('Fab');
  private _debug = this._log.debug('debug');

  private isExpanded: boolean = false;

  @ContentChildren(FabSubAction)
  public child: QueryList<FabSubAction>;

  @ContentChild(FabActionExpanded)
  public actionExpanded: FabActionExpanded;

  public hasExpandedAction: boolean = true;

  constructor() {
    ;
  }

  public onClick(): void {
    this.isExpanded = !this.isExpanded;
  }

  public onSubActionClick(): void {
    this.isExpanded = false;
  }

  public ngAfterContentInit(): void {
    this.hasExpandedAction = this.actionExpanded !== null;
    // available here
    this._debug(this.hasExpandedAction);
  }
}

export const FAB_DIRECTIVES: any[] = [Fab, FabAction, FabSubAction, FabActionExpanded];
