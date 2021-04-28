import { Plant } from '../plant.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

const EXAMPLE_DATA: Plant[] = [
  {id: 1, name: 'Hydrogen', alert: 'Regar'},
  {id: 2, name: 'Helium', alert: 'Regar'},
  {id: 3, name: 'Lithium', alert: 'Regar'},
  {id: 4, name: 'Beryllium', alert: 'Regar'},
  {id: 5, name: 'Boron', alert: 'Regar'},
  {id: 6, name: 'Carbon', alert: 'Regar'},
  {id: 7, name: 'Nitrogen', alert: 'Regar'},
  {id: 8, name: 'Oxygen', alert: 'Regar'},
  {id: 9, name: 'Fluorine', alert: 'Regar'},
  {id: 10, name: 'Neon', alert: 'Regar'},
  {id: 11, name: 'Sodium', alert: 'Regar'},
  {id: 12, name: 'Magnesium', alert: 'Regar'},
  {id: 13, name: 'Aluminum', alert: 'Regar'},
  {id: 14, name: 'Silicon', alert: 'Regar'},
  {id: 15, name: 'Phosphorus', alert: 'Regar'},
  {id: 16, name: 'Sulfur', alert: 'Regar'},
  {id: 17, name: 'Chlorine', alert: 'Regar'},
  {id: 18, name: 'Argon', alert: 'Regar'},
  {id: 19, name: 'Potassium', alert: 'Regar'},
  {id: 20, name: 'Calcium', alert: 'Regar'},
];


export class PlantRead2DataSource extends DataSource<Plant> {
  data: Plant[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<Plant[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Plant[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Plant[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
