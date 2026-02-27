import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { pdpTokens } from '@/components/pdp/pdp-tokens';

export function BenefitRow() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <MaterialCommunityIcons
          name="cash-refund"
          size={14}
          color={pdpTokens.colors.textPrimary}
        />
        <Text style={styles.label}>5-day money back</Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons
          name="truck-delivery-outline"
          size={14}
          color={pdpTokens.colors.textPrimary}
        />
        <Text style={styles.label}>Free HK Delivery / Pick at store</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 34,
    marginHorizontal: pdpTokens.spacing.sm,
    marginTop: pdpTokens.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: pdpTokens.colors.line,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  label: {
    color: pdpTokens.colors.textPrimary,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 14,
    lineHeight: 17,
    textDecorationLine: 'underline',
  },
});