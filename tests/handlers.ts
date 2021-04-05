import { rest } from 'msw';
import {
  homeFormSubmit,
  homeFormSubmitTree,
  generateAndExport,
  getPlacesResponse,
  getPlaceResponse,
  getActionsResponse,
} from './responses';

export const handlers = [
  rest.post(/Api\/Structure\/CreateFromTags/, (req, res, ctx) => {
    return res(ctx.json(homeFormSubmit), ctx.status(200));
  }),
  rest.get(/Api\/Structure/, (req, res, ctx) => {
    return res(ctx.json(homeFormSubmitTree), ctx.status(200));
  }),
  rest.get(/Api\/Process\/Places/, (req, res, ctx) => {
    return res(ctx.json(getPlacesResponse), ctx.status(200));
  }),
  rest.get(/Api\/Process\/Place/, (req, res, ctx) => {
    return res(ctx.json(getPlaceResponse), ctx.status(200));
  }),
  rest.get(/Api\/Process\/Actions/, (req, res, ctx) => {
    return res(ctx.json(getActionsResponse), ctx.status(200));
  }),
  rest.post(/Api\/Configure\/Many/, (req, res, ctx) => {
    return res(ctx.json({}), ctx.status(200));
  }),
  rest.post(/Api\/Configure\/Single/, (req, res, ctx) => {
    return res(ctx.json({}), ctx.status(200));
  }),
  rest.post(/Api\/Configure\/SpsMatrix/, (req, res, ctx) => {
    return res(ctx.json({}), ctx.status(201));
  }),
  rest.post(/Api\/Project\/GenerateAndExport/, (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json(generateAndExport),
      ctx.status(200),
    );
  }),
];
