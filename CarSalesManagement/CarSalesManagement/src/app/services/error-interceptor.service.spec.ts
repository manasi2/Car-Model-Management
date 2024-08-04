import { TestBed } from '@angular/core/testing';
import { ErrorInterceptorService } from './error-interceptor.service'; // Ensure this path is correct
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ErrorInterceptorService', () => {
  let service: ErrorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ErrorInterceptorService]
    });
    service = TestBed.inject(ErrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
