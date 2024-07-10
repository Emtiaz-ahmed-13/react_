import './App.css';
import Card from './components/Card/Card';

function App() {
  // let myobj={
  //   username:"Emtiaz",
  //   age:22
  // }
  // let newArr=[1,2,3,4,5,6,7,8,9]
  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl'>Tailwind Test</h1>

    <div className=' flex gap-5'>

    <Card  username="Emtiaz" btnText="click me" />
     <Card username="Efty" btnText="visit me" />
    </div>
    </>
  );
}

export default App;
 