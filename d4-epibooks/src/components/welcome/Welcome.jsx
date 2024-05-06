import Alert from 'react-bootstrap/Alert';
import "./welcome.css"

const Welcome = () => {
  return (
    <>
    <h1 className="welcome-title text-center mt-4 mb-4">EpiBooks</h1>
    <Alert className="alert-bg text-center">
      <p className="m-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
    </Alert>
    </>
  );
}



export default Welcome;