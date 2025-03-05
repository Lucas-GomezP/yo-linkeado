import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full justify-between">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}