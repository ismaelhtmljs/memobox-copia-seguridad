import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
import '@/components/css/responsive/responsive.css'

export default function Home() {
  return (
    <div className="_nextjs">
      <div>
        {/*  */}
        <Header />
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}
