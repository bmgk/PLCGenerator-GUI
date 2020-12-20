import '@testing-library/jest-dom/extend-expect';
import i18n from '../src/i18n/i18n';
import { server } from './server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

i18n.changeLanguage('en');
