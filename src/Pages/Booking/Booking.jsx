import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return initializeTimes();
    case 'UPDATE':
      return updateTimes(action.payload);
    default:
      return state;
  }
};

const submitForm = async (formData) => {
  const submissionResult = await submitAPI(formData);
  if (submissionResult) {
    console.log('Reservation submitted successfully');
    alert('Reservation submitted successfully');
  } else {
    console.log('Reservation submission failed');
    // Handle submission failure
  }
};

const fetchAPI = async (date) => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
};

const ReservationForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('17:00');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');

  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  const initializeTimes = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    return fetchAPI(formattedDate);
  };

  const updateTimes = (selectedDate) => {
    return fetchAPI(selectedDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      selectedDate,
      selectedTime,
      numberOfGuests,
      selectedOccasion,
    };
  
    try {
      await submitForm(formData);
      console.log('Form submitted successfully'); 
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <main id='Booking'>
        <form id='Booking_Form' onSubmit={handleSubmit}>
            <div id='Booking_Form_Questions'>
                <div className='Questions'>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" onChange={(e)=>{setSelectedDate(e.target.value)}} required/>
                </div>
                <div className='Questions'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" onChange={(e)=>{setSelectedTime(e.target.value)}} required>
                    {availableTimes.map(a => <option key={a}>{a}</option>)}
                    </select>
                </div>
                <div className='Questions'>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="0" min="1" max="10" id="guests"  onChange={(e)=>{setNumberOfGuests(e.target.value)}} required/>
                </div>
                <div className='Questions'>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" onChange={(e)=>{setSelectedOccasion(e.target.value)}} required>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
            </div>
            <input type="submit" value="Make Your reservation" id='Booking_Form_Btn'/>
        </form>
    </main>
  );
};

export default ReservationForm;