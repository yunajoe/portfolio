import HomeContent from "@/components/contents/HomeContent";
import MainNavBar from "@/components/navbar/MainNavBar";

export default function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <MainNavBar />
      <HomeContent />
    </div>
  );
}
