import { Pressable, StyleSheet, Text, View } from 'react-native';

import { pdpTokens } from '@/components/pdp/pdp-tokens';
import type { PdpVariantOption } from '@/components/pdp/types';

export type VariantSelectorProps = {
  options: PdpVariantOption[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function VariantSelector({ options, selectedId, onSelect }: VariantSelectorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ring Size</Text>
      <View style={styles.row}>
        {options.map((option) => {
          const isSelected = option.id === selectedId;
          const isDisabled = option.enabled === false;

          return (
            <Pressable
              key={option.id}
              disabled={isDisabled}
              onPress={() => onSelect(option.id)}
              style={[styles.chip, isSelected ? styles.chipSelected : undefined]}>
              <Text
                style={[
                  styles.chipLabel,
                  isSelected ? styles.chipLabelSelected : undefined,
                  isDisabled ? styles.chipLabelDisabled : undefined,
                ]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: pdpTokens.spacing.sm,
    paddingVertical: pdpTokens.spacing.md,
    gap: pdpTokens.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: pdpTokens.colors.line,
  },
  title: {
    color: pdpTokens.colors.textPrimary,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.3,
  },
  row: {
    flexDirection: 'row',
    gap: pdpTokens.spacing.xs,
  },
  chip: {
    width: 40,
    height: 36,
    borderWidth: 1,
    borderColor: pdpTokens.colors.line,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: pdpTokens.colors.white,
  },
  chipSelected: {
    backgroundColor: '#2A2A2A',
    borderColor: '#2A2A2A',
  },
  chipLabel: {
    color: pdpTokens.colors.textPrimary,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 14,
    lineHeight: 18,
  },
  chipLabelSelected: {
    color: pdpTokens.colors.white,
  },
  chipLabelDisabled: {
    color: '#C9C3BE',
  },
});

