import React from 'react';

const JHeaderConfirm = () => {
  return (
    <div className="text-center mt-3 mb-3">
      <svg
        width="40"
        height="29"
        viewBox="0 0 40 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.6543 0.0292969L12.8125 24.8711L2.3457 14.4043L0.279297 16.4707L11.7793 27.9707L12.8125 28.959L13.8457 27.9707L39.7207 2.0957L37.6543 0.0292969Z"
          fill="#22C55E"
        />
      </svg>
      <div
        className="confirm-title mt-3 mb-3"
        style={{
          fontWeight: 800,
          fontSize: '20px',
          lineHeight: '26px',
          color: '#18181B',
        }}
      >
        Thank You for your order
      </div>
      <div
        style={{
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#334155',
        }}
        className="confirm-order"
      >
        order No #33651
      </div>
    </div>
  );
};

export default React.memo(JHeaderConfirm);
