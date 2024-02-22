import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, useRequest } from '@umijs/max';
import DogBreed from './DogBreed';
import PetFoodFacts from './PetFoodFacts';
import styles from './index.less';
import { getCatFacts } from './services/fetch';

export default function HomePage() {
  const { name } = useModel('global');
  const { data, error, loading } = useRequest(getCatFacts);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  if (!data) {
    return <div>No CatFacts data</div>;
  }

  // after data loaded without error, start render final view
  console.log(data?.at(0));
  const mydata = data?.at(0)?.text;

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />

        <p>CatFacts: {mydata}</p>
        <DogBreed />
        <PetFoodFacts />
      </div>
    </PageContainer>
  );
}
