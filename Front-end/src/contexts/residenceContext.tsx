import React from "react";

import { createContext, useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { api } from '../services/api';

import { ToastContainer, toast } from 'react-toastify';

export const ResidenceContext = createContext(null);

export const ResidenceProvider = ({ children }) => {
  const [residenceData, setResidenceData] = useState({});
  const [step, setStep] = useState(1);
  const router = useRouter();

  function advanceStep() {
    if (step !== 8) {
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

  const handleStep = (stepData) => {
    const newStepData = { ...residenceData, stepData };
    setResidenceData(newStepData);
  }

  return (
    <ResidenceContext.Provider
      value={{
        residenceData,
        handleStep,
        advanceStep,
        backStep,
        step
      }}
    >
      {children}
    </ResidenceContext.Provider>
  );
}
