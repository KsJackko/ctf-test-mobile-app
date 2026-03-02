import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { shoppingBagTokens } from '@/components/shopping-bag/shopping-bag-tokens';
import type { ShoppingBagGiftItem, ShoppingBagSummaryData } from '@/components/shopping-bag/types';

type ShoppingBagSummaryProps = {
  summary: ShoppingBagSummaryData;
  giftBannerText?: string;
  giftItems?: ShoppingBagGiftItem[];
  onPressActionRow?: (id: string) => void;
};

export function ShoppingBagSummary({
  summary,
  giftBannerText,
  giftItems,
  onPressActionRow,
}: ShoppingBagSummaryProps) {
  return (
    <View style={styles.container}>
      {giftBannerText && giftItems && giftItems.length > 0 ? (
        <View style={styles.giftSection}>
          <View style={styles.giftBanner}>
            <View style={styles.giftBannerInner}>
              <Text style={styles.giftBannerText}>{giftBannerText}</Text>
              <Image source={require('@/assets/figma/shopping-bag/icon-info.png')} style={styles.infoIcon} />
            </View>
          </View>

          {giftItems.map((giftItem) => (
            <View key={giftItem.id} style={styles.giftItemCard}>
              <Image source={giftItem.imageSource} style={styles.giftImage} contentFit="cover" />

              <View style={styles.giftItemContent}>
                <View style={styles.giftTextBlock}>
                  <Text style={styles.giftTitle}>{giftItem.title}</Text>
                  <Text style={styles.giftPrice}>{giftItem.priceLabel}</Text>
                </View>
              </View>

              <Text style={styles.giftQuantity}>{giftItem.quantityLabel}</Text>
            </View>
          ))}
        </View>
      ) : null}

      <View style={styles.orderSection}>
        <View style={styles.actionRows}>
          {summary.actionRows.map((row, index) => (
            <Pressable
              key={row.id}
              accessibilityRole="button"
              onPress={() => onPressActionRow?.(row.id)}
              style={({ pressed }) => [
                styles.actionRow,
                index > 0 ? styles.actionRowWithTopLine : undefined,
                pressed ? styles.pressed : undefined,
              ]}>
              <Text style={styles.actionRowText}>{row.label}</Text>
              <Image
                source={require('@/assets/figma/shopping-bag/icon-chevron-right.png')}
                style={styles.actionChevron}
              />
            </Pressable>
          ))}
        </View>

        <View style={styles.summaryBlock}>
          <Text style={styles.orderTitle}>{summary.orderTitle}</Text>

          <View style={styles.rows}>
            {summary.rows.map((row) => (
              <View key={row.id} style={styles.row}>
                <Text style={styles.rowLabel}>{row.label}</Text>
                <Text style={[styles.rowValue, row.value.startsWith('-') ? styles.rowValueAccent : undefined]}>
                  {row.value}
                </Text>
              </View>
            ))}

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>{summary.totalLabel}</Text>
              <Text style={styles.totalValue}>{summary.totalValue}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: shoppingBagTokens.sizing.contentWidth,
    alignSelf: 'center',
    gap: shoppingBagTokens.spacing.md,
  },
  giftSection: {
    gap: 0,
  },
  giftBanner: {
    height: 32,
    paddingHorizontal: shoppingBagTokens.spacing.md,
    justifyContent: 'center',
    backgroundColor: shoppingBagTokens.colors.white,
  },
  giftBannerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: shoppingBagTokens.spacing.xs,
  },
  giftBannerText: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 12,
    lineHeight: 14,
  },
  infoIcon: {
    width: 16,
    height: 16,
  },
  giftItemCard: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: shoppingBagTokens.colors.white,
  },
  giftImage: {
    width: shoppingBagTokens.sizing.giftImageWidth,
    height: shoppingBagTokens.sizing.giftImageHeight,
  },
  giftItemContent: {
    width: 249,
    paddingTop: shoppingBagTokens.spacing.md,
    paddingRight: shoppingBagTokens.spacing.md,
    paddingBottom: shoppingBagTokens.spacing.md,
    paddingLeft: 0,
  },
  giftTextBlock: {
    flex: 1,
    gap: shoppingBagTokens.spacing.xs,
  },
  giftTitle: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 16,
    lineHeight: 24,
  },
  giftPrice: {
    color: shoppingBagTokens.colors.textAccent,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  giftQuantity: {
    position: 'absolute',
    right: shoppingBagTokens.spacing.md,
    bottom: shoppingBagTokens.spacing.md,
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  orderSection: {
    gap: 40,
  },
  actionRows: {
    borderTopWidth: 1,
    borderTopColor: shoppingBagTokens.colors.line,
  },
  actionRow: {
    minHeight: 32,
    paddingHorizontal: shoppingBagTokens.spacing.md,
    paddingVertical: shoppingBagTokens.spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: shoppingBagTokens.colors.white,
  },
  actionRowWithTopLine: {
    borderTopWidth: 1,
    borderTopColor: shoppingBagTokens.colors.line,
  },
  actionRowText: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  actionChevron: {
    width: 24,
    height: 24,
  },
  summaryBlock: {
    gap: shoppingBagTokens.spacing.lg,
  },
  orderTitle: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.serif,
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  rows: {
    gap: shoppingBagTokens.spacing.xs,
  },
  row: {
    paddingHorizontal: shoppingBagTokens.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  rowValue: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  rowValueAccent: {
    color: shoppingBagTokens.colors.textAccent,
  },
  totalRow: {
    marginTop: shoppingBagTokens.spacing.xs,
    paddingTop: shoppingBagTokens.spacing.xs,
    paddingHorizontal: shoppingBagTokens.spacing.md,
    borderTopWidth: 1,
    borderTopColor: shoppingBagTokens.colors.line,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.bodyBold,
    fontSize: 16,
    lineHeight: 24,
  },
  totalValue: {
    color: shoppingBagTokens.colors.textPrimary,
    fontFamily: shoppingBagTokens.typography.bodyBold,
    fontSize: 16,
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.72,
  },
});
