import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { pdpTokens } from '@/components/pdp/pdp-tokens';

type PDPHeaderProps = {
  cartCount: number;
  topInset: number;
  onCartPress?: () => void;
};

export function PDPHeader({ cartCount, topInset, onCartPress }: PDPHeaderProps) {
  return (
    <View style={[styles.container, { paddingTop: Math.max(topInset, 6) }]}>
      <View style={styles.actionRow}>
        <Feather name="chevron-left" size={24} color={pdpTokens.colors.icon} />
        <View style={styles.rightActions}>
          <Feather name="upload" size={22} color={pdpTokens.colors.icon} />
          <Pressable
            accessibilityRole="button"
            onPress={onCartPress}
            style={({ pressed }) => [styles.cartHit, pressed ? styles.pressed : undefined]}>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color={pdpTokens.colors.icon}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: pdpTokens.colors.pageBg,
  },
  actionRow: {
    height: 52,
    paddingHorizontal: pdpTokens.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: pdpTokens.spacing.sm,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pdpTokens.spacing.md,
  },
  cartHit: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: pdpTokens.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: pdpTokens.colors.white,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
