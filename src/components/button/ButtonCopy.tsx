import React, { useState } from 'react';

type ButtonCopyProps = {
  text?: string;
};

const ButtonCopy: React.FC<ButtonCopyProps> = ({ text }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleCopy = () => {
    // Get the text field
    navigator.clipboard.writeText(text || '');
    setClicked(true);
  };

  return (
    <>
      {clicked ? (
        <button className="copy-button">
          <div>Text Copied</div>
          <i style={{ fontSize: '1.25rem' }} className="icofont-check-circled primary"></i>
        </button>
      ) : (
        <button className="copy-button" onClick={handleCopy}>
          <div>Copy</div>
          <img src={require('../../assets/images/copy.png')} alt="copy-icon" />
        </button>
      )}
    </>
  );
};

export default React.memo(ButtonCopy);
