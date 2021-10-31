import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import usePackages from '../../../hooks/usePackages';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const { packages } = usePackages();
    const { isLoading } = useAuth();

    if (isLoading) {
        return <div className="text-center">
            <div className="spinner-border text-info" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <Container className="py-5">

                {/* Packages Headings */}
                <div className="text-center my-5">
                    <h6 className="packages-title pb-2">FEATURED TOUR</h6>
                    <h1 className="packages-heading my-3">Popular Tour Package</h1>
                    <p className="packages-quotes pt-2">“Don’t tell me how educated you are, tell me how much you traveled.”</p>
                </div>

                {/* Packages */}
                <Row lg={3} md={2} sm={1} className="my-5 py-5 g-4">
                    {
                        packages.map(bestPackage => <Package
                            key={bestPackage._id}
                            bestPackage={bestPackage}
                        ></Package>)
                    }
                </Row>
            </Container >
        </div>
    );
};

export default Packages;