import "./globals.css";

export const metadata = {
  title: "프론트에드 개발자 포트폴리오 - 류혜리",
  description: "Next.js 기반 신입 프론트엔드 개발자 포트폴리오 사이트트",
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
