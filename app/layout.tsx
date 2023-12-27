import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata: Metadata = {
  title: "Jibruk E-Commerce",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Fetch the user
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="mx-8  sm:mx-20 lg:mx-32 ">
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}
      </body>
    </html>
  );
}
