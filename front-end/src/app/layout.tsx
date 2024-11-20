import { getUserInfoByRefreshToken } from "@/api/actions/user";
import AutoLoginProvider from "@/components/provider/AutoLoginProvider";
import { TransLationProvider } from "@/context/TransLationContext";
import { notoSansKrMedium } from "@/public/fonts/notoSansKr";
import StoreProvider from "@/src/app/StoreProvider";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
const userDataFetchFunc = async () => {
  const refreshToken = await getCookie("refreshToken", { cookies });

  if (refreshToken) {
    const user = await getUserInfoByRefreshToken(refreshToken);
    return user;
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userDataFetchFunc();

  return (
    <html lang="ko" className={`${notoSansKrMedium}`}>
      <body>
        <StoreProvider>
          <MantineProvider>
            <AutoLoginProvider user={user?.data}>
              <TransLationProvider>{children}</TransLationProvider>
            </AutoLoginProvider>
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
