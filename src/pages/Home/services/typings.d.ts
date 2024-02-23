// Postman public demo rest API: https://www.postman.com/cs-demo/workspace/public-rest-apis/folder/8854915-64142a26-a16b-43f9-9303-ff8b13d9d3ee

type CatFact = {
  status: {
    verified: boolean;
    sentCount: number;
  };
  _id: string;
  user: string;
  text: string;
  source: string;
  updatedAt: Date;
  type: string;
  createdAt: Date;
  deleted: boolean;
  used: boolean;
};

type DogBreeds = {
  message: {
    australian: string[];
    buhund: string[];
    hound: string[];
  };
  status: 'success' | 'failed';
};

type PetFoodFacts = {
  code: string;
  status: number;
  status_verbose: string;
  product: {
    id: string;
    image_thumb_url: string;
    image_ingredients_thumb_url: string;
  };
};
