"use client"

import useFetchCharacters from '@/app/hooks/useFetchChar';
import { Button, ButtonGroup } from '@/styledComponents/StyledComponents'
import React from 'react'

function ButtonLoad() {
  const { pageNumber, setPageNumber } = useFetchCharacters();
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <ButtonGroup>
        <Button onClick={handleNextPage}>Load More</Button>
    </ButtonGroup>
  )
}

export default ButtonLoad