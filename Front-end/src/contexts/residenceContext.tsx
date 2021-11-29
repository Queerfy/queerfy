import React, { useEffect } from 'react';

import { createContext, useState } from 'react';

import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

export const ResidenceContext = createContext(null);

export const ResidenceProvider = ({ children }) => {
  const [residenceData, setResidenceData] = useState({});
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('context images');
    console.log(images);
  }, [images]);

  function advanceStep() {
    if (step !== 9) {
      setStep(step + 1);
    }
  }

  function backStep() {
    if (step !== 1) {
      setStep(step - 1);
    } else {
      router.push('/');
    }
  }

  function setImagesUser(localImages) {
    images.push(localImages);

    console.log(images);
  }

  const handleStep = (stepData) => {
    const newStepData = { ...residenceData, ...stepData };
    setResidenceData(newStepData);
  };

  const handleDataUpdate = (dataUpdate) => {
    setResidenceData(dataUpdate);
  };

  return (
    <ResidenceContext.Provider
      value={{
        residenceData,
        handleStep,
        advanceStep,
        backStep,
        step,
        setImagesUser,
        handleDataUpdate,
      }}
    >
      {children}
    </ResidenceContext.Provider>
  );
};
