// https://mantine.dev/styles/responsive/
import { searchCompany, searchMajor } from "@/api/search";
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

// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
async function getMajor() {
  const result = await searchMajor();
  return result;
}

async function getCompany() {
  const result = await searchCompany();
  return result;
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userDataFetchFunc();

  // const majorData = getMajor();
  // const companyData = getCompany();

  // const [majorList, companyList] = await Promise.all([majorData, companyData]);

  return (
    <html lang="en" className={`${notoSansKrMedium}`}>
      <body>
        <StoreProvider>
          <MantineProvider>
            <AutoLoginProvider user={user?.data}>{children}</AutoLoginProvider>
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
