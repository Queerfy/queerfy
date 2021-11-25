import React, { useEffect } from "react";

import { createContext, useState } from 'react';

import { useRouter } from 'next/router';

export const ResidenceContext = createContext(null);

export const ResidenceProvider = ({ children }) => {
  const [residenceData, setResidenceData] = useState({});
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('context images');
    console.log(images);
  }, [images])

  function advanceStep() {
    if (step !== 9) {
      setStep(step + 1);
      console.log(step);
    }
  }

  function backStep() {
    if (step !== 1) {
      setStep(step - 1);
      console.log(step);
    } else {
      router.push('/')
    }
  }

  function setImagesUser(localImages) {
    images.push(localImages);

    console.log(images);
  }

  const handleStep = (stepData) => {
    const newStepData = { ...residenceData, ...stepData };
    setResidenceData(newStepData);
  }

  return (
    <ResidenceContext.Provider
      value={{
        residenceData,
        handleStep,
        advanceStep,
        backStep,
        step,
        setImagesUser
      }}
    >
      {children}
    </ResidenceContext.Provider>
  );
}
