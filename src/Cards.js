import React from 'react';
import './Cards.css'; // Import CSS file for Cards styles

const cardData = [
  {
    id: 1,
    roomNo: "SDS 537",
    desc: "Nihith & Aryan",
    mainImageSrc: "https://i.postimg.cc/rm06cbtM/537.jpg",
    leftImageSrc: "https://i.postimg.cc/7YFFQMPC/Aryan.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/K8F28r66/Nihith.jpg"
  },
  {
    id: 2,
    roomNo: "SDS 538",
    desc: "Gowtham & Susank",
    mainImageSrc: "https://i.postimg.cc/rm06cbtM/537.jpg",
    leftImageSrc: "https://i.postimg.cc/bNvYhjt7/Susank.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/8P3GgfDv/Gowtham.jpg"
  },
  {
    id: 3,
    roomNo: "SDS 539",
    desc: "Chaitanya Srinivas & Abhilaash",
    mainImageSrc: "https://i.postimg.cc/rm06cbtM/537.jpg",
    leftImageSrc: "https://i.postimg.cc/xdZpcMxG/Abhilaash.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/Z5cnMvLS/chaitanya.jpg"
  },
  {
    id: 4,
    roomNo: "SDS 540",
    desc: "Gandhi & Kedar",
    mainImageSrc: "https://i.postimg.cc/rm06cbtM/537.jpg",
    leftImageSrc: "https://i.postimg.cc/jS5G2xqb/Kedar.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/ZYwHRrWW/Gandhi.jpg"
  },
  {
    id: 5,
    roomNo: "SDS 541",
    desc: "Harshith & Anjineya",
    mainImageSrc: "https://i.postimg.cc/rm06cbtM/537.jpg",
    leftImageSrc: "https://i.postimg.cc/Kcp7FxWL/Anji.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/wBtPgwqc/Harshith.jpg"
  },
  {
    id: 6,
    roomNo: "SDS 542",
    desc: "Rahul Raj & Krishna Aditya",
    mainImageSrc: "https://i.postimg.cc/rm06cbtM/537.jpg",
    leftImageSrc: "https://i.postimg.cc/yYFQZ775/krishnaaditya.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/zfSHCPyq/RahulRaj.jpg"
  },
  {
    id: 7,
    roomNo: "SDS 543",
    desc: "Ganesh & Praneeth",
    mainImageSrc: "https://i.postimg.cc/rm06cbtM/537.jpg",
    leftImageSrc: "https://i.postimg.cc/13gkhbxB/pranneth.jpg", // Use the same image as the main image
    rightImageSrc: "https://i.postimg.cc/fT2XNLsR/ganesh.jpg"
  },
  // Add more card data objects as needed
];

const Cards = () => {
  return (
    <div className="cards-container">
        
      {cardData.map(card => (
        <div key={card.id} className='card-container'>
            {card.id == 3 ? <img src='https://i.postimg.cc/B6PRJMgf/Panneru.jpg' alt="Main Image" className="side-image" /> : <div className='side-image'></div>}
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
          {card.id == 2 ? <img src="https://i.postimg.cc/nhxw9q4B/banda.jpg" alt="Main Image" className="side-image" /> : <div className='side-image'></div>}
        </div>
      ))}
      <div className="mob">
      <img src="https://i.postimg.cc/nhxw9q4B/banda.jpg" alt="Main Image" />
      <img src="https://i.postimg.cc/B6PRJMgf/Panneru.jpg" alt="Main Image"  />
      </div>
    </div>
  );
};

export default Cards;
