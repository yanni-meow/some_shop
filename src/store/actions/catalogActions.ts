export type updateCatalogAction = {
    type: 'SET_CATALOG',
    payload: string,
}

export const setCatalog = (currCatalog: string) : updateCatalogAction => {
  return {
    type: 'SET_CATALOG',
    payload: currCatalog,
  };
};