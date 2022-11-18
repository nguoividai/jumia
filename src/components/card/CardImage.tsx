import React from 'react';

type CardImageProps = {
  src?: string;
  title?: string;
  extra?: string;
  description?: string;
  action?: React.ReactNode;
  shape?: 'circle' | 'normal';
  size?: 'ssm' | 'sm' | 'md' | 'lg';
};

const CardImage: React.FC<CardImageProps> = (props) => {
  const { src, title, extra, description, action, shape, size } = props;
  return (
    <div className="card-image">
      <div className="image">
        {src ? <img src={src} alt="img" className={(shape || '') + ' ' + (size || '')} /> : null}
      </div>
      <div className="content">
        {title ? <div className="content-title">{title}</div> : null}
        {extra ? <div className="content-title--extra">{extra}</div> : null}
        {description ? <div className="content-description">{description}</div> : null}
        {action ? <div className="content-action">{action}</div> : null}
      </div>
    </div>
  );
};

export default React.memo(CardImage);
