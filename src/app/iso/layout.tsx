import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Certificate | Ocean 9 Offshore Services",
  description:
    "Official ISO 9001:2015 Certificate of Registration for Ocean 9 Offshore Services Pvt. Ltd.",
};

export default function ISOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
