import { useRequest } from '@umijs/max';
import { fetchCatDogData } from '../services/data';

export default function () {
  const { data, error, loading } = useRequest(fetchCatDogData);
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
  // Promise.all() must return same element length even if the request failed
  console.log(data);
  const catData = data[0];
  const dogData = data[1];

  return (
    <>
      <div>Cat Facts: {catData?.at(0)?.text}</div>
      <div>Australian breed: {dogData?.message.australian.at(0)}</div>
    </>
  );
}
