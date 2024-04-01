import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Cards from './Cards'

function App() {
  const images = [
    'https://i.postimg.cc/xCqyP9nQ/Group1.jpg',
    'https://i.postimg.cc/v8JJBtRQ/group2.jpg',
    'https://i.postimg.cc/HkgjQMMm/group3.jpg',
    'https://i.postimg.cc/qvNhBr2h/Group4.jpg',
    // Add more image paths here as needed
  ];

  return (
    <div>
      <Homepage images={images} />
      <Cards />
    </div>
  );
}

export default App;
