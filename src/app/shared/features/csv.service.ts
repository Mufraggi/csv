import { Injectable } from '@angular/core';
import Papa from 'papaparse';

type CSVData = { [key: string]: string | number }

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  parseCsv(fileContent: File): Promise<any> {
    return new Promise((resolve, reject) => {
      Papa.parse<CSVData>(fileContent, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          console.log(result);
          resolve(result);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  }
}
