import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

describe('Calculation MyService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // On test le résultat d'un calcul
  it('test multiplication', () => {
    const a = 4;

    const result = a * 2;
    expect(result).toBe(8);
  });
});


describe('Test function "add" ', () => {
    const service = new MyServiceService();
    beforeEach(() => {
      // const service = new MyServiceService();
      console.log('creation..');
    });

    // On test la fonction "add" qui doit additionner les paramètres d'entrée
    it('should return 6', () => {
      const result = service.add(4, 2);

      expect(result).toBe(6);
    });
  });


describe('Test function "lowerOrZero" ', () => {
    const service = new MyServiceService();
    it('Should answer 0 for null', () => {
      const result = service.lowerOrZero(null);
      expect(result).toBe(0);
    });

    it('Should answer correct answer', () => {
      const result = service.lowerOrZero([2, 1, 3]);
      expect(result).toBe(1);
    });

    it('Should answer 0 if negative', () => {
      const result = service.lowerOrZero([2, 1, -3]);
      expect(result).toBe(0);
    });
});
