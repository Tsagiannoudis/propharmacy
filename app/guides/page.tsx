import type { Metadata } from "next";
import { GuidesHubClientView } from "./GuidesHubClientView";

export const metadata: Metadata = {
  title: "Οδηγοί Υγείας & Ομορφιάς από τους Φαρμακοποιούς | ProPharmacy",
  description:
    "Ανακαλύψτε επιστημονικούς οδηγούς υγείας, περιποίησης προσώπου και σώματος, βιταμινών, βρεφικής φροντίδας και πρώτων βοηθειών από την ομάδα φαρμακοποιών του ProPharmacy.",
  openGraph: {
    title: "Οδηγοί Υγείας & Ομορφιάς | ProPharmacy",
    description:
      "Εξειδικευμένες συμβουλές, σωστές ρουτίνες και προτάσεις προϊόντων για κάθε ανάγκη σας από τους φαρμακοποιούς του ProPharmacy.",
  },
};

export default function GuidesPage() {
  return <GuidesHubClientView />;
}
