import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import CatDog from './components/CatDog';
import PetFoodFacts from './components/PetFoodFacts';
import styles from './index.less';

export default function () {
  const { name } = useModel('global');

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />

        <CatDog />
        <PetFoodFacts />
      </div>
    </PageContainer>
  );
}
