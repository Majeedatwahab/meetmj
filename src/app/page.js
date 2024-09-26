import Link from "next/link";
import AboutMe from "./AboutMe/page";
import MySpec from "./MySpec/page";
import FunQuiz from "./FunQuiz/page";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-12 px-6 bg-blue-900">
      
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
        {/* Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
  <Image
    src="/images/bg-hero-image.jpeg"
    alt="MJ"
    width={256}  // Equivalent to w-64
    height={256} // Equivalent to h-64
    className="object-cover rounded-full shadow-lg"
  />
</div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hey, I&rsquo;m MJ

          </h1>
          <p className="text-lg mb-6">
            Software Developer. Indoor Enthusiast. Lover of Good Food.
          </p>
          <Link
            href="/FunQuiz"
            className="inline-block px-6 py-3 bg-white text-black text-lg font-semibold rounded-md hover:bg-blue-300"
          >
            Are we a match?
          </Link>
        </div>
      </div>
    </section>
    <AboutMe/>
    <MySpec/>
    <FunQuiz/>
    
   </>
  );
}
