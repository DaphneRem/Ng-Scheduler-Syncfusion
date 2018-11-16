import { Component, ViewEncapsulation } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

import { extend } from '@syncfusion/ej2-base';

import {
    EventSettingsModel,
    GroupModel
    // DayService,
    // WeekService,
    // WorkWeekService,
    // MonthService,
    // AgendaService,
    // MonthAgendaService,
    // TimelineViewsService,
    // TimelineMonthService,
    // DragAndDropService
  } from '@syncfusion/ej2-angular-schedule';

// import { defaultData } from './datasource';
import { timelineResourceData, resourceData } from './datasource';


// enable ripple effects
enableRipple(true);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .timeline-resource-grouping.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
        width: 90px;
    }
    .timeline-resource-grouping.e-schedule .e-agenda-view .e-resource-column {
        width: 100px;
    }
  `],
    encapsulation: ViewEncapsulation.None,
  // styleUrls: ['./app.component.scss'],
  // providers: [
  //   DayService,
  //   WeekService,
  //   WorkWeekService,
  //   MonthService,
  //   AgendaService
  // ]
})
export class AppComponent {
  // public selectedDate: Date = new Date(2018, 1, 15);
  // public showWeekend: Boolean = false;
  // public eventSettings: EventSettingsModel = { dataSource: defaultData };

    public selectedDate: Date = new Date(2018, 3, 4);
    public group: GroupModel = {
        byGroupID: false,
        resources: ['Categories', 'Users']
        // resources: ['Categories']
        // resources: ['Projects', 'Categories']
    };
    // public projectDataSource: Object[] = [
    //     { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    //     { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    //     { text: 'PROJECT 3', id: 3, color: '#df5286' }
    // ];
    public categoryDataSource: Object[] = [
        { text: 'Régie A', id: 1, color: '#008eaa' },
        { text: 'Régie B', id: 2, color: '#d20962' },
        { text: 'Régie C', id: 3, color: '#ffc845' },
        { text: 'Régie D', id: 4, color: '#7ac143' }
    ];
    public userDataSource: Object[] = [
        { text: 'User1', id: 1},
        { text: 'User2', id: 2},
        { text: 'User3', id: 3},
        { text: 'User4', id: 4}
    ];
    public allowMultiple: Boolean = true;
    public eventSettings: EventSettingsModel = {
        dataSource: <Object[]>extend([], resourceData.concat(timelineResourceData), null, true)
    };
}
