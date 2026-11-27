import { View, Text, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function AboutScreen() {
  return (
    <View style={styles.view}>
      <FontAwesome6
        name="dog"
        size={55}
        color="black"
        style={{ paddingBottom: 20 }}
      />
      <Text style={styles.heading}>Give a dog a second chance</Text>
      <Text style={[styles.text, { paddingBottom: 20 }]}>
        Looking to welcome a new best friend into your life? Our shelter is home
        to wonderful dogs who are ready for a loving, permanent home. Each dog
        has their own story, personality, and needs — and we’re here to help you
        find the perfect match.
      </Text>
      <Text style={styles.heading}>Apply for adoption</Text>
      <Text style={[styles.text, { paddingBottom: 15 }]}>
        We’d love to hear from you! Reach out to us to learn more or schedule a
        visit and meet our dogs in person.
      </Text>
      <Text style={[styles.text, { paddingBottom: 2 }]}>
        Email: contact@shelter.com
      </Text>
      <Text style={[styles.text, { paddingBottom: 20 }]}>
        Phone: +1 XXX XXX XXX
      </Text>
      <Text style={styles.heading}>Why adopt from us?</Text>
      <Text style={styles.text}>
        All dogs are carefully cared for and evaluated. We help match you with
        the right dog for your lifestyle and continue an ongoing support and
        guidance after adoption
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 15,
  },
  heading: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 20,
    paddingBottom: 15,
  },
});
