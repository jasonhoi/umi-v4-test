import { useRequest } from '@umijs/max';
import { getPetFoodFacts } from './services/fetch';

export default function HomePage() {
  const { data, error, loading } = useRequest(getPetFoodFacts);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  // after data loaded without error, start render final view

  // getPetFoodFacts
  console.log(data?.product);
  const mydata = data?.product.image_thumb_url;

  return <img title="Pet Food" src={mydata} />;
}
