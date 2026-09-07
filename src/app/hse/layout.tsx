import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSE & Quality Policy | Ocean 9 Offshore Services",
  description:
    "Official Health, Safety, Environment (HSE) & Quality Policy documents of Ocean 9 Offshore Services Pvt. Ltd.",
};

export default function HSELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
