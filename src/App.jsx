import { useState } from 'react';
import './App.css';

const App = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [category, setCategory] = useState('');

  const handle1 = (e) => {
    setWeight(e.target.value);
  };
  const handle2 = (e) => {
    setHeight(e.target.value);
  };

  const calculate = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const bmi = weightNum / (heightNum ** 2);
      setResult(bmi.toFixed(2));
      determineCategory(bmi);
    } else {
      setResult('Invalid input');
      setCategory('');
    }
  };

  const determineCategory = (bmi) => {
    if (bmi <= 18.5) {
      setCategory('underweight');
    } else if (bmi > 18.5 && bmi <= 25) {
      setCategory('normal');
    } else if (bmi > 25 && bmi <= 30) {
      setCategory('overweight');
    } else if (bmi > 30 && bmi <= 35) {
      setCategory('obese');
    } else {
      setCategory('extremely obese');
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'underweight':
        return 'lightblue';
      case 'normal':
        return 'green';
      case 'overweight':
        return 'orange';
      case 'obese':
        return 'red';
      case 'extremely obese':
        return 'darkred';
      default:
        return 'black';
    }
  };

  return (
    <>
      <main className='flex justify-center items-center'>
        <div className="container">
          <div className="main-content py-12 rounded justify-center items-center flex-col">
            <div className="text-container text-center">
              <h1 className="text-4xl text-emerald-600 font-bold">BMI CALCULATOR</h1>
              <p className='text-sm pt-2'>BMI formula in Metric system:</p>
              <span className='text-sm'>BMI = Weight(in kilograms)/Height^2(in meters)</span>
            </div>
            <form className='flex py-8 gap-4 flex-col items-center'>
              <input value={weight} onChange={handle1} placeholder='WEIGHT IN KILOGRAMS (e.g. 60)' className='p-2 font-bold w-1/4 border-0 rounded-lg text-center' type="number" />
              <input value={height} onChange={handle2} placeholder='HEIGHT IN METRES (e.g. 1.75)' className='p-2 font-bold w-1/4 border-0 rounded-lg text-center' type="number" />
              <button onClick={calculate} className='bg-emerald-600 py-3 px-2 rounded-lg text-white font-bold' type="button">CALCULATE</button>
            </form>
            <div className="results flex justify-center">
              <h1 className='text-4xl font-bold' style={{ color: getCategoryColor() }}>
                Your BMI is: {result !== null && `${result} (${category})`}
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
