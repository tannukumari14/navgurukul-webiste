"use client";
import React, { useState, useEffect } from 'react';
import Data from './Data'; 
import "./NewsSection.css"

const NewsSection = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(Data);
    }, []);

    return (
        <div className="news-section">
            <h2 >Campus News & Events</h2>
            <ul className="news-list">
                {news.map(item => (
                    <li key={item.id} className="news-item">
                        <div className='text'>
                        <img src={item.image} alt={item.title} className="news-image" /> 
                        <h3>{item.title}</h3>
                        <p><strong>Date:</strong> {item.date}</p>
                        <p>{item.description}</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsSection;