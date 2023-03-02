import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test("Updates time", () => {
  render(<BookingForm />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});