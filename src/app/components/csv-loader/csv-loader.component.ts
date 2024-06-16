import {Component, input, output, OutputEmitterRef} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {NgForOf, NgIf} from "@angular/common";
import {CsvService} from "../../shared/features/csv.service";

@Component({
  selector: 'app-csv-loader',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatColumnDef,
    MatTable,
    MatHeaderCell,
    MatCardTitle,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    NgForOf,
    NgIf
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Charger un fichier CSV</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <input type="file" (change)="onFileChange($event)" accept=".csv"/>
      </mat-card-content>
    </mat-card>
  `
})
export class CsvLoaderComponent {

  loadedFile: OutputEmitterRef<File> = output<File>();


  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.loadedFile.emit(file)
    }
  }
}

