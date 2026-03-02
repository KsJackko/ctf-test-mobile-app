import { useRouter } from 'expo-router';

import { ShoppingBagPage } from '@/components/shopping-bag/ShoppingBagPage';
import { SHOPPING_BAG_MOCK } from '@/components/shopping-bag/mock-data';
import type { ShoppingBagItem } from '@/components/shopping-bag/types';

export default function ShoppingBagRoute() {
  const router = useRouter();

  const handlePressItem = (item: ShoppingBagItem) => {
    if (!item.pdpRoute) {
      return;
    }

    router.push(item.pdpRoute);
  };

  return <ShoppingBagPage data={SHOPPING_BAG_MOCK} onPressItem={handlePressItem} />;
}
