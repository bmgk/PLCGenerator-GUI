import { rest } from 'msw';
import { homeFormSubmit, homeFormSubmitTree } from './responses';

export const handlers = [
  rest.post(/Api\/Structure\/CreateFromTags/, (req, res, ctx) => {
    return res(ctx.json(homeFormSubmit), ctx.status(200));
  }),
  rest.get(/Api\/Structure/, (req, res, ctx) => {
    return res(ctx.json(homeFormSubmitTree), ctx.status(200));
  }),
  rest.post(/Api\/Configure\/Many/, (req, res, ctx) => {
    return res(ctx.json({}), ctx.status(200));
  }),
  rest.post(/Api\/Configure\/Single/, (req, res, ctx) => {
    return res(ctx.json({}), ctx.status(200));
  }),
];
