import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Imported syncfusion button module from buttons package
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

// import the ScheduleModule for the Schedule component
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
  DragAndDropService,
  TimelineViewsService,
  TimelineMonthService,
  ResizeService
} from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Registering EJ2 Button Module
    ButtonModule,
    ScheduleModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    DragAndDropService,
    TimelineViewsService,
    TimelineMonthService,
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
