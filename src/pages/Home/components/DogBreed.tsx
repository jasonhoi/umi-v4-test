import { useRequest } from '@umijs/max';
import { fetchDogData } from '../services/data';

export default function () {
  const { data, error, loading } = useRequest(fetchDogData);

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
  console.log(data?.message);
  const mydata = data?.message.australian.at(0);

  return <p>Australian breed: {mydata}</p>;
}
