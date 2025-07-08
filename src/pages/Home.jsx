import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div>
                    <h1 className="text-center">Welcome</h1>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-lg btn-info m-2" onClick={()=>navigate('/termsandconditions')}>Terms & Conditions</button>
                        <button className="btn btn-lg btn-info m-2" onClick={()=>navigate('/privacyandpolicy')}>Privacy & Policy</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;