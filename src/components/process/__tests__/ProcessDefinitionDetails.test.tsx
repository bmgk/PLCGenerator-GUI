import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProcessDefinitionDetails from '../details/ProcessDefinitionDetails';
import { ProcessProvider } from '../context';
import { createEmptyStep } from '../details/utils';

describe('ProcessDefinition', () => {
  const onSubmit = jest.fn();
  const onBack = jest.fn();

  describe('initialValues null', () => {
    beforeEach(() => {
      return render(
        <ProcessProvider>
          <ProcessDefinitionDetails
            initialValues={null}
            onSubmit={onSubmit}
            onBack={onBack}
          />
        </ProcessProvider>,
      );
    });

    it('initial render', async () => {
      expect(
        screen.getByRole('table', {
          name: 'process-definition-details',
        }),
      );
    });

    it('submit disabled', async () => {
      expect(
        screen.getByRole('button', {
          name: 'submit',
        }),
      ).toBeDisabled();
    });

    it('click back', async () => {
      userEvent.click(
        screen.getByRole('button', {
          name: 'back',
        }),
      );
      expect(onBack).toBeCalled();
    });

    it('create new action modal', async () => {
      userEvent.click(
        screen.getByRole('button', {
          name: 'create',
        }),
      );

      await waitFor(() =>
        expect(
          screen.getByRole('dialog', { name: 'create-action-form' }),
        ).toBeDefined(),
      );
    });
  });

  describe('initialValues not null', () => {
    beforeEach(() => {
      const initialValues = createEmptyStep();
      initialValues.Comment = 'Comment';
      initialValues.ShortcutName = 'ShortcutName';
      initialValues.Actions = [
        {
          Element: 'Element',
          ToolType: 'ToolType',
          ActionName: 'ActionName',
          ToolName: 'ToolName',
          TypeConditions: null,
        },
      ];

      return render(
        <ProcessProvider>
          <ProcessDefinitionDetails
            initialValues={initialValues}
            onSubmit={onSubmit}
            onBack={onBack}
          />
        </ProcessProvider>,
      );
    });

    it('submit not disabled', async () => {
      expect(
        screen.getByRole('button', {
          name: 'submit',
        }),
      ).not.toBeDisabled();
    });

    it('delete dialog show', async () => {
      userEvent.click(
        screen.getByRole('button', {
          name: 'delete-Action[0]',
        }),
      );
      await waitFor(() =>
        expect(
          screen.getByRole('dialog', {
            name: 'delete-action-confirmation',
          }),
        ).toBeDefined(),
      );
    });

    it('edit modal show', async () => {
      userEvent.click(
        screen.getByRole('button', {
          name: 'edit-Action[0]',
        }),
      );

      await waitFor(() =>
        expect(
          screen.getByRole('dialog', {
            name: 'create-action-form',
          }),
        ).toBeDefined(),
      );
    });
  });
});
