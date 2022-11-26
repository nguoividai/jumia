import React from 'react';
import List from 'src/components/list/List';

const InfoAddProduct = () => {
  return (
    <>
      <div className="selected-item">
        <List className="divided-inside" layout="horizontal">
          <List.ListItem>
            Size: <strong>XL</strong>
          </List.ListItem>
          <List.ListItem>
            Crust: <strong>Cheese Stuffed</strong>
          </List.ListItem>
          <List.ListItem>
            Base: <strong>BBQ</strong>
          </List.ListItem>
        </List>
      </div>
    </>
  );
};

export default React.memo(InfoAddProduct);
