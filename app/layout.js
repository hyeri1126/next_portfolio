import "./globals.css";

export const metadata = {
  title: "프론트에드 개발자 포트폴리오 - 류혜리",
  description: "Next.js 기반 신입 프론트엔드 개발자 포트폴리오 사이트",
  openGraph: {
    title: "프론트엔드 개발자 포트폴리오 - 류혜리",
    description: "Next.js 기반 신입 프론트엔드 개발자 포트폴리오 사이트",
    url: "https://next-portfolio-hyeri.vercel.app",
    siteName: "류혜리 포트폴리오",
    images: [
      {
        url: "/images/thumbnail.png", 
        width: 1200,
        height: 630,
        alt: "류혜리 포트폴리오",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
      >
        {children}
      </body>
    </html>
  );
}
