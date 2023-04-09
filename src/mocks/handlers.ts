import { rest } from 'msw';
import { fetchURL } from '../utils/constants';

export const handlers = [
  rest.get(`${fetchURL}?name=${'rick'}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          gender: 'string',
          id: 1,
          location: {
            name: 'string',
          },
          name: 'string',
          species: 'string',
          status: 'string',
          image: 'string',
        },
        {
          gender: 'asd',
          id: 2,
          location: {
            name: 'ds',
          },
          name: 'as',
          species: 'ds',
          status: 'fa',
          image: 'ssvb',
        },
      ])
    );
  }),
];
