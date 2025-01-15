// src/styles.css.ts

import { style } from '@vanilla-extract/css';

export const recipeContainer = style({
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: 'gray',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

export const recipeItem = style({
  padding: '15px',
  marginBottom: '10px',
  borderBottom: '1px solid #ddd',
});

export const recipeTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
});
