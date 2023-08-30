import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import ReservationForm from './ReservationForm'; // Import the component to test

// Mock submitForm function
const mockSubmitForm = jest.fn();

// Mock the submitForm function implementation
jest.mock('./ReservationForm', () => ({
  __esModule: true,
  default: (props) => <form {...props} />,
  submitForm: mockSubmitForm,
}));

describe('ReservationForm', () => {
  it('submits the form successfully', async () => {
    // Mock successful submission
    mockSubmitForm.mockResolvedValue(true);

    render(<ReservationForm />);

    // Simulate filling out the form
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-08-30' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: 3 } });
    fireEvent.click(screen.getByText('Make Your reservation'));

    // Wait for the form submission
    await screen.findByText('Reservation submitted successfully');

    expect(mockSubmitForm).toHaveBeenCalledWith({
      selectedDate: '2023-08-30',
      selectedTime: '17:00',
      numberOfGuests: 3,
      selectedOccasion: 'Birthday',
    });
  });

  it('handles form submission failure', async () => {
    // Mock submission failure
    mockSubmitForm.mockResolvedValue(false);

    render(<ReservationForm />);

    fireEvent.click(screen.getByText('Make Your reservation'));

    // Wait for the form submission
    await screen.findByText('Reservation submission failed');

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
