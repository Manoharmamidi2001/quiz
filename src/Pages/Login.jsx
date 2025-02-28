import { Card, Button, FormControl } from 'react-bootstrap';

const Mylogin = ({ handleSubmit, input, handleChange }) => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Card className='p-4 shadow-lg' style={{ width: '90%', maxWidth: '400px' }}>
        <h3 className="text-center">Start Quiz</h3>
        <FormControl placeholder='Please Enter Your Name' value={input} onChange={handleChange}/>
        <Button style={{ width: '100%' }} className='mt-3' onClick={handleSubmit}>
          Start
        </Button>
      </Card>
    </div>
  );
};

export default Mylogin;
