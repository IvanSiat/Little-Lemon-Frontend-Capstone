import React, { useState } from 'react';
import { Link } from "react-router-dom";
const BookingForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const occasionChoice = ['Birthday', 'Anniversary', 'Engagement', 'Other'];

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone-number">Phone Number</label>
      <input
        type="tel"
        id="phone-number"
        name="phoneNumber"
        value={phoneNumber}
        placeholder="Phone Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        placeholder="Date"
        onChange={handleDateChange}
      />

      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={guests}
        placeholder="# of Guests"
        onChange={(e) => setGuests(e.target.value)}
      />

<label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select an occasion</option>
        {occasionChoice.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>

      <label htmlFor="special-requests">Special Requests</label>
      <textarea
        id="special-requests"
        name="specialRequests"
        value={specialRequests}
        onChange={(e) => setSpecialRequests(e.target.value)}
        rows={8}
        cols={50}
        placeholder="Special requests"
      ></textarea>
              <Link className="action-button" to="/confirmation">
                <button>
          Book Table
          </button>
        </Link>
    </form>
  );
};

export default BookingForm;
