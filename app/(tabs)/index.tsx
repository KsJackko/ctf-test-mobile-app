import { AntDesign, Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const variants = ['16', '17', '18', '19', '20'];

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <Image source={require('@/assets/figma/status-bar.png')} style={styles.topBar} contentFit="cover" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('@/assets/figma/pdp-product-kv.png')}
          style={styles.hero}
          contentFit="cover"
        />

        <View style={styles.info}>
          <View style={styles.badgesRow}>
            <Text style={styles.goldBadge}>App Exclusive</Text>
            <Text style={styles.goldBadge}>Only 4 Left</Text>
          </View>

          <Text style={styles.subtitle}>18K/750 white gold diamond ring</Text>
          <Text style={styles.priceNow}>HK$24,460</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceOriginal}>HK$26,200</Text>
            <View style={styles.discountTag}>
              <Text style={styles.discountText}>-20%</Text>
            </View>
          </View>
        </View>

        <View style={styles.benefits}>
          <View style={styles.benefitCard}>
            <Feather name="truck" size={18} color="#2A2A2A" />
            <Text style={styles.benefitText}>Free Delivery</Text>
          </View>
          <View style={styles.benefitCard}>
            <AntDesign name="creditcard" size={18} color="#2A2A2A" />
            <Text style={styles.benefitText}>Money Back</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Variant</Text>
          <View style={styles.variantRow}>
            {variants.map((size, index) => (
              <View key={size} style={[styles.variantChip, index === 1 && styles.variantSelected]}>
                <Text style={[styles.variantText, index === 1 && styles.variantTextSelected]}>{size}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Product Details</Text>
            <Feather name="chevron-down" size={18} color="#2A2A2A" />
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Delivery & Return</Text>
            <Feather name="chevron-down" size={18} color="#2A2A2A" />
          </View>
          <View style={[styles.row, styles.rowNoBorder]}>
            <Text style={styles.rowTitle}>Gift Wrapping</Text>
            <Feather name="chevron-down" size={18} color="#2A2A2A" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.recommendTitle}>You May Also Like</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cards}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.card}>
                <View style={styles.cardImage} />
                <Text style={styles.cardName}>Diamond Ring Collection</Text>
                <Text style={styles.cardPrice}>HK$18,900</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <Image source={require('@/assets/figma/bottom-cta.png')} style={styles.bottomCta} contentFit="cover" />
      <Image
        source={require('@/assets/figma/home-indicator.png')}
        style={styles.homeIndicator}
        contentFit="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    aspectRatio: 786 / 220,
    zIndex: 20,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 110,
    paddingBottom: 120,
  },
  hero: {
    width: '100%',
    aspectRatio: 802 / 786,
  },
  info: {
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D7D4D1',
    gap: 8,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: 16,
  },
  goldBadge: {
    color: '#B59A5D',
    fontSize: 12,
    lineHeight: 16,
  },
  subtitle: {
    color: '#2A2A2A',
    fontSize: 24,
    lineHeight: 28,
  },
  priceNow: {
    color: '#A10D1F',
    fontSize: 18,
    lineHeight: 24,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceOriginal: {
    color: '#2A2A2A',
    opacity: 0.6,
    fontSize: 16,
    lineHeight: 20,
    textDecorationLine: 'line-through',
  },
  discountTag: {
    backgroundColor: '#A10D1F',
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 14,
  },
  benefits: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D7D4D1',
  },
  benefitCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D7D4D1',
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  benefitText: {
    color: '#2A2A2A',
    fontSize: 13,
    lineHeight: 16,
  },
  section: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D7D4D1',
  },
  sectionTitle: {
    color: '#2A2A2A',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  variantRow: {
    flexDirection: 'row',
    gap: 8,
  },
  variantChip: {
    width: 40,
    height: 36,
    borderWidth: 1,
    borderColor: '#D7D4D1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variantSelected: {
    backgroundColor: '#2A2A2A',
    borderColor: '#2A2A2A',
  },
  variantText: {
    color: '#2A2A2A',
    fontSize: 14,
    lineHeight: 18,
  },
  variantTextSelected: {
    color: '#FFFFFF',
  },
  row: {
    height: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#D7D4D1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowNoBorder: {
    borderBottomWidth: 0,
  },
  rowTitle: {
    color: '#2A2A2A',
    fontSize: 14,
    lineHeight: 18,
    textTransform: 'uppercase',
  },
  recommendTitle: {
    color: '#2A2A2A',
    fontSize: 28,
    lineHeight: 32,
    marginBottom: 12,
  },
  cards: {
    gap: 8,
  },
  card: {
    width: 160,
    gap: 8,
  },
  cardImage: {
    width: 160,
    height: 160,
    backgroundColor: '#F4F2F1',
    borderWidth: 1,
    borderColor: '#D7D4D1',
  },
  cardName: {
    color: '#2A2A2A',
    fontSize: 12,
    lineHeight: 15,
  },
  cardPrice: {
    color: '#A10D1F',
    fontSize: 14,
    lineHeight: 18,
  },
  bottomCta: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 34,
    width: '100%',
    aspectRatio: 787 / 158,
    zIndex: 25,
  },
  homeIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    aspectRatio: 786 / 68,
    zIndex: 30,
  },
});
