import React, { useState, useEffect } from "react";
import axios from "axios";

import EventCard from "../../Cards/EventCard";

import { Grid } from "@chakra-ui/core";

const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    let uri = `http://admin.insae.org/api/events/all`;
    axios
      .get(uri)
      .then(data => {
        setEvents(data.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' m={3} gap={6} minHeight='100vh'>
        {events.map((event, id) => {
          return <EventCard key={events[id].event_id} event={events[id]} />;
        })}
      </Grid>
    </>
  );
};

export default Events;
