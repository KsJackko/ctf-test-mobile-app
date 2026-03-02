import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { shoppingBagTokens } from '@/components/shopping-bag/shopping-bag-tokens';
import type { ShoppingBagItem } from '@/components/shopping-bag/types';

type ShoppingBagItemCardProps = {
  item: ShoppingBagItem;
  onPressItem?: (item: ShoppingBagItem) => void;
  onPressClose?: (itemId: string) => void;
  onPressQuantity?: (itemId: string) => void;
  onPressTrailingAction?: (itemId: string) => void;
};

export function ShoppingBagItemCard({
  item,
  onPressItem,
  onPressClose,
  onPressQuantity,
  onPressTrailingAction,
}: ShoppingBagItemCardProps) {
  const currentPriceColor =
    item.priceCurrentColor === 'accent'
      ? shoppingBagTokens.colors.textAccent
      : shoppingBagTokens.colors.textPrimary;
  const isItemClickable = Boolean(item.pdpRoute && onPressItem);

  return (
    <Pressable
      accessibilityRole={isItemClickable ? 'button' : undefined}
      disabled={!isItemClickable}
      onPress={isItemClickable ? () => onPressItem?.(item) : undefined}
      style={({ pressed }) => [styles.card, isItemClickable && pressed ? styles.cardPressed : undefined]}>
      <Image source={item.imageSource} style={styles.itemImage} contentFit="cover" />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.infoBlock}>
            {item.badgeText ? <Text style={styles.badge}>{item.badgeText}</Text> : null}
            <Text style={styles.title}>{item.title}</Text>
            {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
            {item.metaLines?.map((metaLine) => (
              <Text key={`${item.id}-${metaLine}`} style={styles.meta}>
                {metaLine}
              </Text>
            ))}

            <View style={styles.priceRow}>
              <Text style={[styles.priceCurrent, { color: currentPriceColor }]}>{item.priceCurrent}</Text>
              {item.priceOriginal ? <Text style={styles.priceOriginal}>{item.priceOriginal}</Text> : null}
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => onPressClose?.(item.id)}
            style={({ pressed }) => [styles.iconHit, pressed ? styles.pressed : undefined]}>
            <Image source={require('@/assets/figma/shopping-bag/icon-close.png')} style={styles.closeIcon} />
          </Pressable>
        </View>

        <View style={styles.bottomRow}>
          <Pressable
            accessibilityRole="button"
            onPress={() => onPressQuantity?.(item.id)}
            style={({ pressed }) => [styles.qtyControl, pressed ? styles.pressed : undefined]}>
            <Text style={styles.qtyText}>{item.quantityLabel}</Text>
            <Image
              source={require('@/assets/figma/shopping-bag/icon-chevron-down.png')}
              style={styles.chevronDown}
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => onPressTrailingAction?.(item.id)}
            style={({ pressed }) => [styles.trailingActionHit, pressed ? styles.pressed : undefined]}>
            <Text style={styles.trailingActionLabel}>{item.trailingActionLabel}</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: shoppingBagTokens.sizing.contentWidth,
    backgroundColor: shoppingBagTokens.colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  cardPressed: {
    opacity: 0.9,
  },
  itemImage: {
    width: shoppingBagTokens.sizing.itemImage,
    height: shoppingBagTokens.sizing.itemImage,
  },
  content: {
    flex: 1,
    paddingTop: shoppingBagTokens.spacing.md,
    paddingBottom: shoppingBagTokens.spacing.md,
    paddingLeft: shoppingBagTokens.spacing.md,
    paddingRight: shoppingBagTokens.spacing.md,
    gap: shoppingBagTokens.spacing.sm,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoBlock: {
    flex: 1,
    gap: shoppingBagTokens.spacing.xs,
  },
  badge: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 11,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  title: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 16,
    lineHeight: 24,
  },
  subtitle: {
    color: shoppingBagTokens.colors.textGold,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 12,
    lineHeight: 14,
  },
  meta: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 12,
    lineHeight: 14,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: shoppingBagTokens.spacing.xs,
  },
  priceCurrent: {
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  priceOriginal: {
    color: shoppingBagTokens.colors.textPrimary,
    opacity: 0.6,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 12,
    lineHeight: 12,
    textDecorationLine: 'line-through',
  },
  iconHit: {
    width: 20,
    height: 20,
    marginLeft: shoppingBagTokens.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyControl: {
    width: shoppingBagTokens.sizing.qtyControlWidth,
    height: shoppingBagTokens.sizing.qtyControlHeight,
    borderWidth: 1,
    borderColor: shoppingBagTokens.colors.line,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: shoppingBagTokens.colors.white,
  },
  qtyText: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  chevronDown: {
    width: 15,
    height: 15,
  },
  trailingActionHit: {
    paddingVertical: 4,
  },
  trailingActionLabel: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 12,
    lineHeight: 14,
  },
  pressed: {
    opacity: 0.72,
  },
});
