import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ShoppingBagBottomBar } from '@/components/shopping-bag/ShoppingBagBottomBar';
import { ShoppingBagHeader } from '@/components/shopping-bag/ShoppingBagHeader';
import { ShoppingBagItemCard } from '@/components/shopping-bag/ShoppingBagItemCard';
import { ShoppingBagSummary } from '@/components/shopping-bag/ShoppingBagSummary';
import { shoppingBagTokens } from '@/components/shopping-bag/shopping-bag-tokens';
import type { ShoppingBagItem, ShoppingBagViewModel } from '@/components/shopping-bag/types';

type ShoppingBagPageProps = {
  data: ShoppingBagViewModel;
  onPressItem?: (item: ShoppingBagItem) => void;
};

export function ShoppingBagPage({ data, onPressItem }: ShoppingBagPageProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.page}>
      <ShoppingBagHeader title={data.title} itemCountLabel={data.itemCountLabel} topInset={insets.top} />

      <ScrollView
        bounces={false}
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingBottom:
              shoppingBagTokens.sizing.bottomBarHeight + Math.max(insets.bottom, 28) + shoppingBagTokens.spacing.md,
          },
        ]}>
        <View style={styles.checkoutArea}>
          {data.items.map((item) => (
            <ShoppingBagItemCard key={item.id} item={item} onPressItem={onPressItem} />
          ))}

          <ShoppingBagSummary
            summary={data.summary}
            giftBannerText={data.giftBannerText}
            giftItems={data.giftItems}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomFixed}>
        <ShoppingBagBottomBar label={data.ctaLabel} insetBottom={insets.bottom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: shoppingBagTokens.colors.pageBg,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  checkoutArea: {
    backgroundColor: shoppingBagTokens.colors.checkoutBg,
    paddingTop: shoppingBagTokens.spacing.md,
    paddingBottom: 40,
    gap: shoppingBagTokens.spacing.md,
  },
  bottomFixed: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
