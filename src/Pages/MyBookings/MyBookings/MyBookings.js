import { Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyBookings.css';
import { Link } from 'react-router-dom';
import Bookings from './../Bookings/Bookings';
import useBookings from './../../../hooks/useBookings';

const MyBookings = () => {
    const { user } = useAuth();
    const { bookings } = useBookings();

    const myBookings = bookings.filter(bk => bk.email === user.email);

    return (
        // My Bookings
        <div className="py-5">

            {/* Bookings Banner */}
            <Row className="myBookings-banner mx-0">
                {/* Banner Header */}
                <Col id="banner-heading" className="d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="text-white">YOUR BOOKINGS</h3>
                        <ul className="text-center ps-0" id="header-route">
                            <li><Link to="/" className="fs-5 text-white">HOME</Link></li>
                            <li><p className="fs-5 ps-1">/ BOOKINGS</p></li>
                        </ul>
                    </div>
                </Col>
            </Row>

            {/* My Bookings */}
            <Container className="px-3 my-5 py-4" id="mybookings-container">
                <Row lg md sm={1} className="px-2">
                    {
                        myBookings.map(bookings => <Bookings
                            key={bookings._id}
                            bookings={bookings}>
                        </Bookings>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyBookings;