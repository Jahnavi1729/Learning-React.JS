import logo from './logo.svg';
import './App.css';


//const lakeList =["hello","yes","no"];

function Lake(){
  return(
    <h1>Lake summer</h1>
  )
}

function App(props) {
  
  console.log(props)
  return (
    <>
    <h4>Rendering elements from lists/arrays with props keys </h4>
    <ul>
      {props.lists.map(lake => (
        <li >{lake}</li>
      ))}
      </ul>
   
      <div>
        {props.lakes.map(lake=>(
          <div key={lake.id}>
            <p>{lake.name}</p>
          </div>
        ))}

      </div>
      {/* How to render numbers? */}
      <p><b>displaying numbers</b></p>
      <ul>
        {props.numbers.map(num => (
          <li key={num.toString()}>{num}</li> 
        ))}
      </ul>
      {/*  <ul>
        {props.numbers.map(num, i => (
          <li key={i}>{num}</li> 
        ))}
      </ul>*/}
      </>
  );
}

export default App;
