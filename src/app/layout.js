import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Woodie Campus Online | 영화과 입시의 새로운 기준",
  description: "2026 영화과 입시 교육의 새로운 기준. 실전형 교육, 합격 데이터 아카이브, 영화인 철학을 담은 우디캠퍼스 온라인.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
