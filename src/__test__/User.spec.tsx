import { render, screen, waitFor, waitForElementToBeRemoved } from '../test/test-utils';
import userEvent from '@testing-library/user-event';

import User from '../User';


describe('Users', () => {
  
    it('renders loading', async () => {
        render(<User />);
        await waitFor(() => {
            expect(screen.queryByText('Loading Users...')).toBeInTheDocument();
        });
    });

    it('add user', async () => {
        render(<User />);
        await waitForElementToBeRemoved(() => screen.queryByText('Loading Users...'))
        
            const button = screen.getByRole('button', {name: /add new user/i});
            userEvent.click(button);
            expect(screen.getByText(/total count: 100/i)).toBeInTheDocument()
            await waitFor(() => {
                expect(screen.getByText(/total count: 101/i)).toBeInTheDocument()
            screen.debug()
        });
        
    })
})