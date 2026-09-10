import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME UDYAM Registration Certificate | Ocean 9 Offshore Services",
  description:
    "Official UDYAM Registration Certificate (Ministry of MSME) of Ocean 9 Offshore Services Pvt. Ltd.",
};

export default function MSMELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
