import { TestBed } from '@angular/core/testing';

import { GameCubeService } from './gamecube.service';

describe('GamecubeService', () => {
  let service: GameCubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
