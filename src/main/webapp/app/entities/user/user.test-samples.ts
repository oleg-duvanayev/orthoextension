import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 30661,
  login: 'L{f@9\\*4y\\%3\\?Zca',
};

export const sampleWithPartialData: IUser = {
  id: 20997,
  login: '_N',
};

export const sampleWithFullData: IUser = {
  id: 13683,
  login: 'TDno',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
