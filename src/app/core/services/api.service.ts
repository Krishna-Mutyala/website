import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Send a contact form message
   * @param data Contact form data
   */
  sendContactMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/contact`, data).pipe(
      retry(2), // Retry failed requests up to 2 times
      catchError(this.handleError)
    );
  }

  /**
   * Handle HTTP errors
   * @param error Error object
   */
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
