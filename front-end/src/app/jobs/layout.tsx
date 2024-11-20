import MainNavBar from "@/components/navbar/MainNavBar";

type JobsPageLayoutProps = {
  children: React.ReactNode;
};

function JobsPageLayout({ children }: JobsPageLayoutProps) {
  return (
    <>
      <MainNavBar />
      {children}
    </>
  );
}

export default JobsPageLayout;
