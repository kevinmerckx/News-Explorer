import { TestBed, inject } from '@angular/core/testing';

import { NxNewsApiService } from './nx.newsapi.service';

describe('Nx.NewsapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NxNewsApiService]
    });
  });

  it('should be created', inject([NxNewsApiService], (service: NxNewsApiService) => {
    expect(service).toBeTruthy();
  }));
});
