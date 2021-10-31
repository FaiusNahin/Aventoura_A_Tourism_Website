import { Col, Row } from 'react-bootstrap';
import useBookings from '../../../hooks/useBookings';
import usePackages from '../../../hooks/usePackages';
import './Bookings.css';

const Bookings = (props) => {
    const { _id, orderId } = props.bookings;
    const { bookings } = useBookings();
    const { packages, setPackages } = usePackages();

    const myBooking = packages.filter(pk => pk._id === orderId);

    const handelDeleteBooking = _id => {
        const query = window.confirm('Do You Want To Delete This Bookings?')
        if (query) {
            fetch(`https://ghostly-vault-49896.herokuapp.com/usePackages/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!!!')
                        const remainingBookings = bookings.filter(user => user._id !== _id);
                        setPackages(remainingBookings);
                    }
                })
        }
    }

    return (
        <>
            {/* Booking */}
            {
                myBooking.map(booking =>
                    <Col key={booking._id} lg={12} md={6} sm={12} className="px-4 my-4" id="booking">

                        {/* Booking Div */}
                        <Row lg={2} md={2} sm={1} className="mx-3" id="booking-div">

                            {/* Booking Image */}
                            <Col lg={5} md={12} sm={12} className="px-0" id="booking-img">
                                <img className="w-100" src={booking.img} alt="" />
                            </Col>

                            {/* Booking Info */}
                            <Col lg={7} md={12} sm={12} className="px-5 py-4" id="booking-info">
                                <div className=" d-flex flex-column flex-lg-row align-items-start align-items-lg-center py-3">

                                    {/* Dates */}
                                    <div id="dates" className="me-4">
                                        {/* Shot Date */}
                                        <h5 id="shot-date">{booking.shortDate}</h5>
                                        {/*  Shot Month  */}
                                        <h6 id="shot-month">{booking.shortMonth}</h6>
                                    </div>
                                    {/* Booking Name */}
                                    <div>
                                        <h3 className="mb-0" id="booking-name">{booking.placeName}</h3>
                                    </div>
                                </div>

                                {/* Booking Description */}
                                <p className="my-0 py-3" id="booking-description">{booking.description.slice(0, 219)}</p>

                                {/* Delete Button */}
                                <button onClick={() => handelDeleteBooking(_id)} className="book-now-button fw-bold my-3" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '.28px', padding: '0px 37px', height: '42px' }}>DELETE</button>
                            </Col>
                        </Row>
                    </Col>
                )
            }
        </>
    );
};

export default Bookings;