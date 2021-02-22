import HttpError from './http';

export const AlreadyExistsUser = new HttpError(409, 'Already Exists User');
