import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from "@/app/components/Navbar";
import {MyProfilePic} from "@/app/components/MyProfilePic";
import {Posts} from "@/app/components/Posts";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hakobs blog",
  description: 'Created by Hakob',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />

        {children}
      </body>
    </html>
  )
}
