import React from 'react'

const projectImgUrl = (project) => {
  return new URL(`../assets/projects-img/${project}`, import.meta.url)
}

export {projectImgUrl};
