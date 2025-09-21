import { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import NewsCard from './components/NewsCard.js';
import Footer from './components/Footer.js';

import img1 from './images/111.jpg';
import img2 from './images/222.jpeg';
import img3 from './images/333.jpg';

function App() {
  const [newsArray, SetNewsArray] = useState([
    { id: 1, title: "First headline", text: "Content of the first news...", img: img1 },
    { id: 2, title: "Second headline", text: "Content of the second news...", img: img2 },
    { id: 3, title: "third headline", text: "Content of the second news...", img: img3 }
  ]);
  return (
    <div className='app'>
      <Header />
        <div className="content">
        <Nav />
        <main className="news-section">
          {newsArray.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              text={item.text}
              img={item.img}
            />
          ))}
          </main>
        </div>
      <Footer />
    </div>
  );
}

export default App;
