import { Pressable, StyleSheet, Text, View } from 'react-native';

import { pdpTokens } from '@/components/pdp/pdp-tokens';

export type PDPBottomBarProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  insetBottom: number;
};

export function PDPBottomBar({ label, onPress, disabled, insetBottom }: PDPBottomBarProps) {
  return (
    <View style={[styles.container, { paddingBottom: Math.max(insetBottom, 12) }]}>
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
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: pdpTokens.colors.pageBg,
    borderTopWidth: 1,
    borderTopColor: pdpTokens.colors.line,
    paddingTop: pdpTokens.spacing.sm,
    paddingHorizontal: pdpTokens.spacing.sm,
  },
  buttonFrame: {
    borderWidth: 1,
    borderColor: pdpTokens.colors.line,
    padding: 2,
  },
  button: {
    height: 50,
    backgroundColor: pdpTokens.colors.buttonBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonLabel: {
    color: pdpTokens.colors.white,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 30 / 2,
    lineHeight: 36 / 2,
    letterSpacing: 0.4,
  },
});
