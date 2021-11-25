import { useContext } from 'react';
import { ResidenceContext } from '../contexts/residenceContext';

export const useResidence = () => {
  const context = useContext(ResidenceContext);

  return context;
};
