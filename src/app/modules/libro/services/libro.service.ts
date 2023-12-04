import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autr } from 'src/app/models/autor';
import { Cate } from 'src/app/models/categoria';
import { Editor } from 'src/app/models/editorial';
import { Lect } from 'src/app/models/lector';
import { Libr } from 'src/app/models/libro';


@Injectable({
  providedIn: 'root'
})
export class LibroService {
  public apiUrl = 'http://localhost:8000/api/reserva';
  public autoresUrl = 'http://localhost:8000/api/cliente';
  public editorialesUrl = 'http://localhost:8000/api/paquete';
  public categoriasUrl = 'http://localhost:8000/api/empleado';

  constructor(public http: HttpClient) {}

  agregarLibro(libro: Libr): Observable<Libr> {
    return this.http.post<Libr>(`${this.apiUrl}/InsertRese`, libro);
  }
//fora
  obtenerAutores(): Observable<Autr[]> {
    return this.http.get<Autr[]>(`${this.autoresUrl}/ListCli`);
  }

  obtenerEditoriales(): Observable<Editor[]> {
    return this.http.get<Editor[]>(`${this.editorialesUrl}/ListPaque`);
  }

  obtenerCategorias(): Observable<Cate[]> {
    return this.http.get<Cate[]>(`${this.categoriasUrl}/ListEmpl`);
  }



  listarLibros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListRese`);
  }

//DeleteBook
  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteRese/${id}`);
  }

  actualizarLibro(id: number, libro: Libr): Observable<Libr> {
    return this.http.put<Libr>(`${this.apiUrl}/EditRese/${id}`, libro);
  }
  
obtenerLibroPorId(id: number): Observable<Libr> {
  return this.http.get<Libr>(`${this.apiUrl}/ListCli/${id}`);
}

listarLibrosPorCategoria(id: number): Observable<Libr[]> {
  return this.http.get<Libr[]>(`${this.apiUrl}/ListPaque/${id}`);
}

listarLibrosPorAutor(id: number): Observable<Libr[]> {
  return this.http.get<Libr[]>(`${this.apiUrl}/ListEmpl/${id}`);
}


}
  