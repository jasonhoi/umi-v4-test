import { useRequest } from '@umijs/max';
import { fetchPetFoodData } from '../services/data';

export default function () {
  const { data, error, loading } = useRequest(fetchPetFoodData);

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
  console.log(data?.product);
  const mydata = data?.product.image_thumb_url;

  return <img title="Pet Food" src={mydata} />;
}
