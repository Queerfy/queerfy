import React, { useState } from 'react';
import { NextPage } from 'next';

import { ResidenceProvider } from '../../contexts/residenceContext';
import { ResidenceForm } from '../../components/ResidenceRegister';

const ResidenceRegister: NextPage = () => {
  return (
    <ResidenceProvider>
      <ResidenceForm />
    </ResidenceProvider>
  );
};

export default ResidenceRegister;
