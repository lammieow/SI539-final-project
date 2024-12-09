import React from 'react';
import SubscriptionSection from '../SubscriptionSection';

function Events() {
  return (
    <>
    <div className="main-h1-container">
    <h1>Event Calendar</h1>
    <iframe className='calendar' src="https://calendar.google.com/calendar/embed?src=c_1a89bd88006daddfa8368fcdcea5c9cdc32afd6f4eb0eef911456dd545e53c70%40group.calendar.google.com&ctz=America%2FNew_York"  width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
    <SubscriptionSection/>
    </>
  )
}

export default Events