import React from 'react'

const getPicturesUrl = (img) => {
  return new URL(`../assets/images/${img}`, import.meta.url)
}

export  {getPicturesUrl};
