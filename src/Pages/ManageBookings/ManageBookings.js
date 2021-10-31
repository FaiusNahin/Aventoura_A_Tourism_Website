import { Col, Row, Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBookings from './../../hooks/useBookings';
import './ManageBookings.css'

const ManageBookings = () => {
    const { bookings, setBookings } = useBookings();

    //Update Status API
    const handelUpdateStatus = _id => {
        const updatedStatus = 'Accept'
        const newCart = { status: updatedStatus }

        const permission = window.confirm('Do You Want To Accept This Bookings?')
        if (permission) {
            fetch(`http://localhost:5000/usePackages/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newCart)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Updated');

                        fetch(`http://localhost:5000/usePackages`)
                            .then(res => res.json())
                            .then(data => setBookings(data));
                    }
                })
        }
    }

    // Delete Bookings APIs
    const handelDeleteBooking = _id => {
        const confirm = window.confirm('Do You Want To Delete This Bookings?')
        if (confirm) {
            fetch(`http://localhost:5000/usePackages/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = bookings.filter(service => service._id !== _id);
                        setBookings(remaining)
                    }

                })
        }
    }

    return (
        <div className="py-5">
            {/* Manage Bookings Banner */}
            <Row className="myBookings-banner mx-0">
                {/* Banner Header */}
                <Col id="banner-heading" className="d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="text-white">MANAGE ALL BOOKINGS</h3>
                        <ul className="text-center ps-0" id="header-route">
                            <li><Link to="/" className="fs-5 text-white">HOME</Link></li>
                            <li><p className="fs-5 ps-1">/ MANAGE BOOKINGS</p></li>
                        </ul>
                    </div>
                </Col>
            </Row>

            {/* Manage Bookings */}
            <Container className="pt-4 py-5 mt-4 px-3">
                <Row lg md sm={1}>
                    {/* Table Container */}
                    <Col lg md sm={12} className="align-items-center" id="table-column">

                        {/* Manage Bookings Table */}
                        <Table responsive borderless className="align-middle my-0 text-center">
                            <thead>
                                {/* Table Heading */}
                                <tr id="table-heading">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Order ID</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    bookings.map(booking =>
                                        // Table Body
                                        <tr className="border-bottom" id="table-body"
                                            key={booking._id}>
                                            <td>{booking.name}</td>
                                            <td>{booking.email}</td>
                                            <td>{booking.orderId}</td>

                                            {/* Update Status Button */}
                                            <td><Button id="status-button" className="text-white border-0" onClick={() => handelUpdateStatus(booking._id)}>{booking.status}</Button></td>

                                            {/* Delete Booking Button*/}
                                            <td className=""><Button variant="danger" onClick={() => handelDeleteBooking(booking._id)}><i className="far fa-trash-alt"></i></Button></td>
                                        </tr>
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageBookings;