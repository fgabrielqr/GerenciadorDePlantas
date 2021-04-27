import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Planta } from './planta.model';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  baseUrl = 'http://localhost:3001/plantas'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(planta: Planta): Observable<Planta>{
    return this.http.post<Planta>(this.baseUrl, planta)
  }

  read(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.baseUrl)
  }

  readById(id: number): Observable<Planta> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Planta>(url)
  }

  update(planta: Planta): Observable<Planta> {
    const url = `${this.baseUrl}/${planta.id}`;
    return this.http.put<Planta>(url, planta)
  }

  delete(id: number): Observable<Planta> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Planta>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
