import { TestBed } from '@angular/core/testing';

import { ProductServiesService } from './product-servies.service';

describe('ProductServiesService', () => {
  let service: ProductServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
