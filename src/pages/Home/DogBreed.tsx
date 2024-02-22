import { useRequest } from '@umijs/max';
import { getDogBreeds } from './services/fetch';

export default function Page() {
  const { data, error, loading } = useRequest(getDogBreeds);

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

  // getDogBreeds
  console.log(data?.message);
  const mydata = data?.message.australian.at(0);

  return <p>Australian breed: {mydata}</p>;
}
