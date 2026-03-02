import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { shoppingBagTokens } from '@/components/shopping-bag/shopping-bag-tokens';

type ShoppingBagHeaderProps = {
  title: string;
  itemCountLabel: string;
  topInset: number;
  onBackPress?: () => void;
  onClosePress?: () => void;
};

export function ShoppingBagHeader({
  title,
  itemCountLabel,
  topInset,
  onBackPress,
  onClosePress,
}: ShoppingBagHeaderProps) {
  return (
    <View style={[styles.container, { paddingTop: Math.max(topInset, 6) }]}>
      <View style={styles.row}>
        <Pressable
          accessibilityRole="button"
          onPress={onBackPress}
          style={({ pressed }) => [styles.iconHit, pressed ? styles.pressed : undefined]}>
          <Image source={require('@/assets/figma/shopping-bag/icon-header-left.png')} style={styles.leftIcon} />
        </Pressable>

        <View pointerEvents="none" style={styles.titleOverlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>{itemCountLabel}</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={onClosePress}
          style={({ pressed }) => [styles.iconHit, pressed ? styles.pressed : undefined]}>
          <Image
            source={require('@/assets/figma/shopping-bag/icon-header-close.png')}
            style={styles.closeIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: shoppingBagTokens.colors.pageBg,
  },
  row: {
    height: shoppingBagTokens.sizing.headerBarHeight,
    paddingHorizontal: shoppingBagTokens.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconHit: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    width: 20,
    height: 20,
  },
  closeIcon: {
    width: 36,
    height: 36,
  },
  titleOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.serif,
    fontSize: 24,
    lineHeight: 29,
  },
  count: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 16,
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});
