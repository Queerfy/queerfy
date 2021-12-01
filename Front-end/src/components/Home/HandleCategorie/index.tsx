import React from 'react';

import { Categorie } from './styles';

interface HandleCategorieProps {
  title: string;
  image: string;
  alt?: string;
  onClick?: any;
}

export const HandleCategorie = (props: HandleCategorieProps) => {
  return (
    <Categorie onClick={props.onClick}>
      <img src={props.image} alt={props.alt || props.image} />
      <h2>{props.title}</h2>
    </Categorie>
  );
};
