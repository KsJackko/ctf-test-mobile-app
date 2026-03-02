import { Pressable, StyleSheet, Text, View } from 'react-native';

import { shoppingBagTokens } from '@/components/shopping-bag/shopping-bag-tokens';

type ShoppingBagBottomBarProps = {
  label: string;
  insetBottom: number;
  onPress?: () => void;
  disabled?: boolean;
};

export function ShoppingBagBottomBar({
  label,
  insetBottom,
  onPress,
  disabled,
}: ShoppingBagBottomBarProps) {
  return (
    <View style={[styles.container, { paddingBottom: Math.max(insetBottom, 28) }]}>
      <View style={styles.buttonFrame}>
        <Pressable
          accessibilityRole="button"
          disabled={disabled}
          onPress={onPress}
          style={({ pressed }) => [
            styles.button,
            pressed && !disabled ? styles.buttonPressed : undefined,
            disabled ? styles.buttonDisabled : undefined,
          ]}>
          <Text style={styles.label}>{label}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: shoppingBagTokens.colors.lineSoft,
    backgroundColor: shoppingBagTokens.colors.white,
    paddingTop: 14,
    paddingHorizontal: shoppingBagTokens.spacing.md,
  },
  buttonFrame: {
    borderWidth: 1,
    borderColor: shoppingBagTokens.colors.line,
    padding: 2,
  },
  button: {
    height: 49,
    backgroundColor: shoppingBagTokens.colors.buttonBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: shoppingBagTokens.colors.textOnDark,
    fontFamily: shoppingBagTokens.typography.body,
    fontSize: 14,
    lineHeight: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.1,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
