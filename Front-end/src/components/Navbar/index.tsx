import React, { KeyboardEvent, useRef } from 'react';

import { Search } from 'react-feather';

import { Center, Container, IconBox, InputBox, SearchInput, Separator } from './styles';

import { MenuDropdown } from './MenuDropdown';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';

type NavbarProps = {
  accountNavbar?: boolean;
};

export const Navbar = ({ accountNavbar }: NavbarProps) => {
  const { handleSearch } = useAuth();

  const router = useRouter();

  const searchRef = useRef<HTMLInputElement>();

  return (
    <Center>
      <Container>
        <Link href="/">
          <img src="../logo.svg" alt="logo" style={{ cursor: 'pointer' }} />
        </Link>
        {!accountNavbar && (
          <>
            <InputBox>
              <SearchInput
                ref={searchRef}
                placeholder="Para onde você quer ir?"
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') {
                    const search = {
                      city: searchRef.current.value,
                    };
                    handleSearch(search);
                    router.push(`/ResidenceList`);
                  }
                }}
              />
              <IconBox>
                <Search
                  onClick={() => {
                    const search = {
                      city: searchRef.current.value,
                    };
                    handleSearch(search);
                    router.push(`/ResidenceList`);
                  }}
                />
              </IconBox>
            </InputBox>
            <Link href="/AboutUs">
              <span>Sobre nós</span>
            </Link>
            <Link href="/Support">
              <span>Suporte</span>
            </Link>
            <Separator />
          </>
        )}
        <MenuDropdown />
      </Container>
    </Center>
  );
};
