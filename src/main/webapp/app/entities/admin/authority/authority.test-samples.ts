import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '09fc3db5-a910-4967-8cab-154f2b83ed09',
};

export const sampleWithPartialData: IAuthority = {
  name: '9c3c9e4d-ece0-48ed-99c7-5e4ab5d570a2',
};

export const sampleWithFullData: IAuthority = {
  name: 'b0051d69-e8c7-4a76-9264-b516ca84597b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
