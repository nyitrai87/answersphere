import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate(); // Import the useNavigate hook

    useEffect(() => {
        const showModal = localStorage.getItem("showModal");
        if (!showModal || showModal === "true") {
            setShow(true);
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        localStorage.setItem("showModal", "false");
    };

    const handleContinueAsGuest = () => {
        handleClose();
    };

    const handleLogin = () => {
        handleClose();
        localStorage.setItem("showModal", "false");
        navigate('/login'); // Redirect to the login page
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton={false}>
                <Modal.Title>Welcome to AnswerSphere!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                To be able to ask the Universe, you need to choose from the following options:<br /><br />
                - You can continue as a guest, but you can only use the app with some limitations.<br /><br />
                - You can log in or create an account to enjoy full functionality, like storing your previous answers and read them again anytime.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="guest-btn" onClick={handleContinueAsGuest}>
                    Continue as Guest
                </Button>
                <Button variant="primary" className="custom-btn" onClick={handleLogin}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;