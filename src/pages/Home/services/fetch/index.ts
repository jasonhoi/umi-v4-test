// Postman public demo rest API: https://www.postman.com/cs-demo/workspace/public-rest-apis/folder/8854915-64142a26-a16b-43f9-9303-ff8b13d9d3ee
import { request } from '@umijs/max';

export function getCatFacts() {
  return request<CatFact[]>('/api/cat/facts', {
    method: 'GET',
  });
}

export function getDogBreeds() {
  return request<DogBreeds>('/api/dog', {
    method: 'GET',
  });
}

export function getPetFoodFacts() {
  return request<PetFoodFacts>('/api/pet-food', {
    method: 'GET',
  });
}
