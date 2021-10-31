import { useEffect, useState } from "react";

const useBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`https://ghostly-vault-49896.herokuapp.com/usePackages`)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    return { bookings, setBookings }
}

export default useBookings;