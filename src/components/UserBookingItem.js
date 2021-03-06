import Seat from "./Seat";
import styles from "../css/UserBookings.module.css";

const UserBookingItem = ({ booking, cancelBooking }) => {
  const message =
    "Are you sure you want to cancel your reservation? This action can not be undone.";

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.removeItemContainer}>
        <h3 className={styles.title}>{booking.screeningId.movieId.title}</h3>
        {cancelBooking && (
          <button
            className={styles.button}
            onClick={() => {
              if (window.confirm(message)) cancelBooking(booking._id);
            }}
          >
            x
          </button>
        )}
      </div>

      <div className={styles.label}>
        <h3>Theater: {booking.screeningId.theaterId.name}</h3>
      </div>

      <div className={styles.label}>
        <h4>Date:</h4>
        <p>
          {new Date(booking.screeningId.date).toLocaleString("sv-SE", {
            timeZone: "Europe/Stockholm",
          })}
        </p>
      </div>

      <div className={styles.seatContainer}>
        <h4>Seat/row:</h4>
        {booking.seats.map((seat, i) => {
          return <Seat key={i} seat={seat.seat} row={seat.row} />;
        })}
      </div>

      <div className={styles.label}>
        <h4>Runtime: </h4>
        <p> {booking.screeningId.movieId.runtime} min</p>
      </div>

      <div className={styles.label}>
        <h4>Total price:</h4>
        <p>{booking.price} SEK</p>
      </div>

      <div className={`${styles.bookingNr}`}>
        <h4>Booking number:</h4>
        <p>{booking._id}</p>
      </div>
    </div>
  );
};

export default UserBookingItem;
