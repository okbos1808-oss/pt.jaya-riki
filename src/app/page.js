import Image from "next/image";
import HeroInfo from "@/components/HeroInfo";
import DataImage from "@/lib/data";
import Link from "next/link";
import * as motion from "motion/react-client"
import ImageCarousel from "@/components/ImageCarousel";
import HeroText from "@/components/HeroText";
import ServiceCard from "@/components/ServiceCard";
import HeroImageWithText from "@/components/HeroImageWithText";
import HeroTyping from "@/components/HeroTyping";
import AutoServiceBox from "@/components/AutoServiceBox";
import WhyUs from "@/components/WhyUs";
import TeamSection from "@/components/TeamSection";


export default function Home() {
  return (
    <>
    <HeroText/>
          {/* hero image */}
      <div className="max-w-5xl mx-auto relative">
 <HeroImageWithText/>
        
 
       <HeroInfo/>
      
      </div>
      {/* tentangkami */}
<div className="mt-32" id="tentangkami">
<motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-4xl text-center font-semibold"
  >
    Tentang Kami
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="mt-4 text-base leading-loose text-center max-w-2xl mx-auto text-slate-600"
  >
    Kami bergerak di bidang konsultasi perizinan usaha, BPOM, SNI, dan lainnya
  </motion.p>

  {/* CONTAINER GLOBAL */}
  <div className="mt-20 flex justify-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        w-full
        max-w-5xl
        shadow-2xl
        rounded-4xl
        overflow-hidden
        bg-black
      "
    >

      {/* IMAGE */}
      <div className="w-full md:w-4/5 lg:w-3/4 mx-auto rounded-2xl">
        <Image
          src={DataImage.Proyek123}
          alt="Proyek Image"
          width={1200}
          height={600}
          priority
          className="w-full h-auto object-cover rounded-t-2xl"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
     
        <p className="text-base leading-loose text-slate-600">
          PT. JAYA RIZKI ALEXANDRA membantu UMKM dalam pengurusan sertifikat halal,
          BPOM, dan perizinan usaha secara profesional.
        </p>

        {/* WHATSAPP */}
        <div className="mt-6">
          <a
            href="https://wa.me/6281278220598?text=Halo%20PT%20Jaya%20Rizki%20Alexandra,%20saya%20ingin%20konsultasi"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-500 transition hover:scale-105"
          >
            <i className="ri-whatsapp-fill text-xl"></i>
            Hubungi Kami
          </a>
        </div>
      </div>

    </motion.div>
  </div>
</div>
{/* TENTENG KAMI */}
<div className="mt-32 text-center">
  <h1 className="text-shadow-blue-300 text-6xl">LAYANAN KAMI</h1>
<div className="mt-10">

<HeroTyping/>
</div>
<div>
  <AutoServiceBox/>
</div>
</div>

          {/* LAYANAN */}

       
        <div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1 " id="layanan">
        <motion.div initial={{opacity:0 ,y:10}} whileInView={{opacity:1 ,y:0}} className="shadow-2xl p-7 rounded-2xl">
        <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
        <p className="font-semibold text-2xl/normal mb-2">Memberikan harga terbaik</p>
        <p className="text-base/loose">lorem ipsum dolor sit akuaoipfrf6wgUFIO[EP[7EW8FY9u[ipo</p>
        </motion.div>

       <motion.div initial={{opacity:0 ,y:10}} whileInView={{opacity:1 ,y:0}} transition={{delay: 0.3}} className="shadow-2xl p-7 rounded-2xl">
        <i className="ri-service-fill ri-3x text-slate-700"></i>
        <p className="font-semibold text-2xl/normal mb-2">Pemeriksaan secara menyeluruh</p>
        <p className="text-base/loose">lorem ipsum dolor sit akuaoipfrf6wgUFIO[EP[7EW8FY9u[ipo</p>
        </motion.div>
        
        <motion.div initial={{opacity:0 ,y:10}} whileInView={{opacity:1 ,y:0}} transition={{delay: 0.6}} className="shadow-2xl p-7 rounded-2xl">
        <i className="ri-star-s-fill ri-3x text-slate-700"></i>
        <p className="font-semibold text-2xl/normal mb-2">Fokus Pada Pelayaanan perizinan usaha</p>
        <p className="text-base/loose">lorem ipsum dolor sit akuaoipfrf6wgUFIO[EP[7EW8FY9u[ipo</p>
        </motion.div>
        </div>
        {/* LAYANAN */}
        

          {/* gambar */}
    <motion.div initial={{opacity:0 ,y:50}} whileInView={{opacity:1 ,y:0}} transition={{delay: 0.6}}className="mt-30 shadow">
      <ImageCarousel/>

          </motion.div>
          
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
  <ServiceCard
    image={DataImage.Proyek6}
    title="Business Matching OEM"
    desc="Membantu perusahaan dalam menjalin kerja sama OEM secara profesional dan legal."
  />

  <ServiceCard
    image={DataImage.Proyek7}
    title="Halal Luar Negeri"
    desc="Pendampingan sertifikasi halal bagi perusahaan luar negeri."
  />

  <ServiceCard
    image={DataImage.Proyek8}
    title="Sertifikat Halal BPJPH"
    desc="Proses sertifikasi halal resmi sesuai regulasi Indonesia."
  />

  <ServiceCard
    image={DataImage.Proyek6}
    title="Test & Market Research"
    desc="Riset pasar dan pengujian produk untuk kesiapan bisnis."
  />
</div>

<WhyUs/>

<TeamSection/>

          {/* kontak */}
      <div className="mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4" id="kontak">
      <h2 className="text-3xl font-bold">Konsultasi</h2>

      <div className=" flex gap-10">
        <Link href="#beranda">Beranda</Link>
        <Link href="#tentangkami">Tentang Kami</Link>
        <Link href="#layanan">Layanan</Link>
        <Link href="#kontak">Kontak</Link>
       <Link href="/login">Sign Up</Link>
      </div>

      <div className=" flex gap-4">
        <Link href="#">
          <i className="ri-youtube-fill ri-2x"></i>
        </Link>
        <Link href="#">
          <i className="ri-instagram-fill ri-2x"></i>
        </Link>
        <Link href="#">
          <i className="ri-facebook-fill ri-2x"></i>
        </Link>
        <Link href="#">
          <i className="ri-google-fill ri-2x"></i>
        </Link>
      </div>
    </div>
          {/* kontak */}
        





    </>
  );
}
