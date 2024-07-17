// https://mantine.dev/styles/responsive/
import { getUserInfoByRefreshToken } from "@/api/user";
import AutoLoginProvider from "@/components/provider/AutoLoginProvider";
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
    <html lang="en" className={`${notoSansKrMedium}`}>
      <body>
        <StoreProvider>
          <MantineProvider>
            <AutoLoginProvider user={user?.data}>
              {/* <MainNavBar /> */}
              {children}
            </AutoLoginProvider>
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
