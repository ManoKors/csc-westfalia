import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Unsere Ziele"
    description="Erfahren Sie mehr über unsere Mission und unsere Aktivitäten zur Förderung einer verantwortungsbewussten Cannabis-Gemeinschaft."
  >
    <VerticalFeatureRow
      title="Aufklärung"
      description="Wir bieten Workshops, Schulungen und Informationsveranstaltungen an, um über die verschiedenen Aspekte von Cannabis aufzuklären."
      image="/assets/images/aufklärung.jpeg"
      imageAlt="Bild zur Aufklärung"
      reverse
    />
    <VerticalFeatureRow
      title="Verantwortungsvoller Umgang"
      description="Unsere Gemeinschaft fördert einen verantwortungsvollen Umgang mit Cannabis, basierend auf Gesundheit, Sicherheit und Aufklärung."
      image="/assets/images/astronaut1.jpeg"
      imageAlt="Bild zum verantwortungsvollen Umgang"
    />
    <VerticalFeatureRow
      title="Europäische Verständigung"
      description="Wir arbeiten aktiv mit anderen Cannabis-Clubs und -Organisationen in Europa zusammen, um das gegenseitige Verständnis und die Zusammenarbeit zu fördern."
      image="/assets/images/germany.jpeg"
      imageAlt="Bild zur europäischen Verständigung"
      reverse
    />
    <VerticalFeatureRow
      title="Gemeinschaft"
      description="Wir fördern eine starke und unterstützende Gemeinschaft innerhalb unseres Clubs, in der Mitglieder sich gegenseitig unterstützen, voneinander lernen und zusammenarbeiten."
      image="/assets/images/astronaut-community.jpeg"
      imageAlt="Bild zur Gemeinschaft"
    />
  </Section>
);

export { VerticalFeatures };
