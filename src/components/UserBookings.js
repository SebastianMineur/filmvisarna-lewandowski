import { useEffect, useState } from "react";
import UserBookingItem from "../components/UserBookingItem";
import styles from "../css/UserBookings.module.css";
import { useQueryParam } from "use-query-params";

const UserBookings = () => {
  const [showPrevious, setShowPrevious] = useQueryParam("previous");
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `/api/v1/bookings/${showPrevious ? "?previous=true" : ""}`
      );
      setBookings(await response.json());
    }
    fetchData();
  }, [showPrevious]);

  const toggleBookings = () => {
    setShowPrevious(showPrevious ? undefined : true);
    setBookings([]);
  };

  const renderTickets = () => {
    if (bookings?.length) {
      return (
        <div>
          {bookings.map((booking) => (
            <UserBookingItem key={booking._id} booking={booking} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <p>No {showPrevious ? "previous" : "upcoming"} bookings to show</p>
        </div>
      );
    }
  };

  return (
    <div className={styles.bookingContainer}>
      <h2 className={styles.textAlign}>Your bookings:</h2>
      <label className={`${styles.switch}`}>
        <input
          onChange={() => {
            toggleBookings();
          }}
          className={styles.input}
          type="checkbox"
          checked={showPrevious ? false : true}
        />
        <span className={`${styles.slider} ${styles.round} slider`}></span>
        <div className={styles.textContainer}>
          <span className={`${styles.activeState} ${styles.bold}`}>
            Previous
          </span>
          <span className={`${styles.activeState} ${styles.bold}`}>
            Upcoming
          </span>
        </div>
      </label>
      {renderTickets()}
    </div>
  );
};

export default UserBookings;
