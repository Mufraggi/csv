import {Component, signal} from '@angular/core';
import {CsvLoaderComponent} from "../../components/csv-loader/csv-loader.component";
import {Router} from "@angular/router";
import {CsvService} from "../../shared/features/csv.service";
import {DataTableComponent} from "../../components/data-table/data-table.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-clean-row',
  standalone: true,
  imports: [
    CsvLoaderComponent,
    DataTableComponent,
    CommonModule
  ],
  template: `
    <app-csv-loader (loadedFile)="open($event)"/>,
    @if ($readyToDisplay()) {
      <app-data-table [csvHeader]="displayedColumns" [csvData]="data"/>
    }
  `
})
export class CleanRowComponent {

  $readyToDisplay = signal<boolean>(false)
  data: any[] = <any[]>{};
  displayedColumns: string[] = [];

  constructor(private csvParserService: CsvService) {
  }

  open(file: File): void {
    this.csvParserService.parseCsv(file).then((result: any) => {
      this.data = result.data
      this.displayedColumns = result.meta.fields;
      this.$readyToDisplay.set(true);
    }).catch((error) => {
      console.error('Error parsing CSV: ', error);
    });
  }
}


type MetaDataCsvExport = {
  delimiter: string,
  "linebreak": string,
  "aborted": boolean,
  "truncated": boolean,
  "cursor": number,
  "fields": string[]
}

