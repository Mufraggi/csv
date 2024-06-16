import {Component} from "@angular/core";
import {Route} from "@angular/router";
import {CsvLoaderComponent} from "../../components/csv-loader/csv-loader.component";
import {CleanRowComponent} from "./clean-row.component";

@Component({
  selector: 'pokedex-route',
  standalone: true,
  imports: [ CleanRowComponent],
  template: `
      <app-clean-row/>
      <
  `,
})
export default class CleanRowRouter {}
