import spinner from '../../assets/Spinner.gif';

function Spinner() {
  return (
    <img 
        src={spinner} 
        alt="Loading..." 
        style={{display: 'block', margin: 'auto', width: '150px'}} />
  )
}

export default Spinner;
