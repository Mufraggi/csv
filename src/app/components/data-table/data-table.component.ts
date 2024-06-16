import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, TitleCasePipe],
  template: `
    <div class="mat-elevation-z8" *ngIf="csvData.length > 0 && csvHeader.length > 0">
      <table mat-table [dataSource]="dataSource">
        <ng-container *ngFor="let column of csvHeader" [matColumnDef]="column">
          <th mat-header-cell *matHeaderCellDef>{{ column | titlecase }}</th>
          <td mat-cell *matCellDef="let element"> {{ element[column] }} </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="csvHeader"></tr>
        <tr mat-row *matRowDef="let row; columns: csvHeader;"></tr>
      </table>
      <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons aria-label="Select page of periodic elements"></mat-paginator>
    </div>
  `,
})
export class DataTableComponent implements AfterViewInit, OnChanges {
  @Input() csvData: any[] = [];
  @Input() csvHeader: string[] = [];

  dataSource = new MatTableDataSource<any>(this.csvData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['csvData']) {
      this.dataSource.data = this.csvData;
    }
  }
}
