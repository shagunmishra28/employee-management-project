import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Credential {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private credentials: Credential[] = [];
  private credentialsLoaded = false;

  constructor(private http: HttpClient) {
    this.loadCredentials();
  }

  // Load CSV file from assets and parse it.
  private loadCredentials(): void {
    this.http.get('assets/credentials.csv', { responseType: 'text' })
      .subscribe(
        data => {
          this.credentials = this.parseCSV(data);
          this.credentialsLoaded = true;
          console.log('Credentials loaded:', this.credentials);
        },
        error => {
          console.error('Error loading credentials CSV', error);
        }
      );
  }

  // A simple CSV parser. Assumes first line is headers.
  private parseCSV(data: string): Credential[] {
    const lines = data.split('\n').map(line => line.trim()).filter(line => line.length);
    const result: Credential[] = [];
    // Skip header line
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length >= 2) {
        result.push({
          username: values[0].trim(),
          password: values[1].trim()
        });
      }
    }
    return result;
  }

  // Validate login by checking if the provided credentials match one from the CSV.
  login(username: string, password: string): boolean {
    if (!this.credentialsLoaded) {
      console.error('Credentials are not loaded yet.');
      return false;
    }
    const user = this.credentials.find(
      u => u.username === username && u.password === password
    );
    return !!user;
  }
}
