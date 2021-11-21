import React from "react";

import Link from 'next/link';

import { Container } from "./styles";

export const HeaderMobile = () => {
  return (
    <Container>
      <Link href="/" >
        <img src="../logo.svg" alt="logo" style={{ cursor: 'pointer' }} />
      </Link>
    </Container>
  );
}
