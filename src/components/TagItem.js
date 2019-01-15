import React, { Component } from 'react';
import './tagItem.css';

function TagItem(value) {
  return (
    <span className="tag">
      <span>{value.value}</span>
      <span className="suppr" onClick={value.supprTag}>
        X
      </span>
    </span>
  );
}

export default TagItem;
