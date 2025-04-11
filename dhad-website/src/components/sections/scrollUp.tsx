import React, { useEffect, useState } from 'react';
import '../../styles/scrollUp.css';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className='up'>
          <ArrowCircleUpTwoToneIcon></ArrowCircleUpTwoToneIcon>
        </button>
      )}
    </div>
  );
};



export default ScrollToTop;