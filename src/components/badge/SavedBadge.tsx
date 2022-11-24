import React from 'react';
import { Badge } from 'react-bootstrap';

const SavedBadge = () => {
  return (
    <Badge className="jumia-saved-badge">
      <i className="icofont-fire-burn"></i> You saved : <strong>£3.22</strong>
    </Badge>
  );
};

export default React.memo(SavedBadge);
