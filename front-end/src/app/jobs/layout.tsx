import MainNavBar from "@/components/navbar/MainNavBar";

type JobsPageLayoutProps = {
  children: React.ReactNode;
};

function JobsPageLayout({ children }: JobsPageLayoutProps) {
  return (
    <div>
      <MainNavBar />
      {children}
    </div>
  );
}

export default JobsPageLayout;
