import React from 'react';
import './Cards.css'; // Import CSS file for Cards styles

const cardData = [
  {
    id: 1,
    roomNo: "SDS 537",
    desc: "This is the content of Card 1.",
    mainImageSrc: "https://i.postimg.cc/FR0hsrrZ/locked-Image.jpg",
    leftImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/K8F28r66/Nihith.jpg"
  },
  {
    id: 2,
    roomNo: "SDS 538",
    desc: "This is the content of Card 1.",
    mainImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg",
    leftImageSrc: "https://i.postimg.cc/bNvYhjt7/Susank.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/8P3GgfDv/Gowtham.jpg"
  },
  {
    id: 3,
    roomNo: "SDS 539",
    desc: "This is the content of Card 1.",
    mainImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg",
    leftImageSrc: "https://i.postimg.cc/xdZpcMxG/Abhilaash.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/G3Fz1WCx/Chai.jpg"
  },
  {
    id: 4,
    roomNo: "SDS 540",
    desc: "This is the content of Card 1.",
    mainImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg",
    leftImageSrc: "https://i.postimg.cc/jS5G2xqb/Kedar.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/ZYwHRrWW/Gandhi.jpg"
  },
  {
    id: 5,
    roomNo: "SDS 541",
    desc: "This is the content of Card 1.",
    mainImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg",
    leftImageSrc: "https://i.postimg.cc/Kcp7FxWL/Anji.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/wBtPgwqc/Harshith.jpg"
  },
  {
    id: 6,
    roomNo: "SDS 542",
    desc: "This is the content of Card 1.",
    mainImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg",
    leftImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/K8F28r66/Nihith.jpg"
  },
  // Add more card data objects as needed
];

const Cards = () => {
  return (
    <div className="cards-container">
        
      {cardData.map(card => (
        <div key={card.id} className='card-container'>
            <img src='https://i.postimg.cc/B6PRJMgf/Panneru.jpg' alt="Main Image" className="side-image" />
            <div className="card">
          <div className="card-images">
            <img src={card.leftImageSrc} alt="Left Image" className="left-image" />
            <img src={card.rightImageSrc} alt="Right Image" className="right-image" />
          </div>
          <div className="card-content">
          <img src={card.mainImageSrc} alt="Main Image" className="main-image" />
            <h2>{card.roomNo}</h2>
            <p>{card.desc}</p>
          </div>
          </div>
          <img src="https://i.postimg.cc/nhxw9q4B/banda.jpg" alt="Main Image" className="side-image" />
        </div>
      ))}
      
    </div>
  );
};

export default Cards;
