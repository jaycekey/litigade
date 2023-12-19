import { martel700, martel900, monserrat500 } from "@/styles/fonts";
import Button from "../components/Button";
import Navbar from "@/components/Navbar";
import AppointmentForm from "@/components/AppointmentForm";

export default function Hero() {
  return (
    <div className="pb-20 lg:px-48 lg:pb-12 text-[#252B42] text-center bg-[url('../assets/images/cover-mobile.svg')] lg:bg-[url('../assets/images/cover-desktop.svg')] bg-cover lg:bg-top bg-no-repeat">
      <Navbar />
      <section className="lg:flex lg:pt-20 lg:gap-6 lg:justify-center">
        <div className="lg:flex lg:flex-col lg:justify-start lg:text-left lg:mt-40 xl:w-1/2">
          <div className="">
            <div className={`lg:hidden text-4xl pt-24 ${martel700.className}`}>
              <p>Help to reclaim</p>
              <p>your life</p>
              <p>and freedom</p>
            </div>
            <p className={`hidden lg:block text-6xl ${martel900.className}`}>
              Help to reclaim your life and freedom
            </p>
          </div>
          <p
            className={`my-8 text-xl text-[#737373] px-6 lg:px-0 lg:mr-40 ${monserrat500.className}`}
          >
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 mt-8 mb-20">
            <div>
              <Button type="primary" text="Get Quote Now" />
            </div>
            <div>
              <Button type="secondary" text="Learn More" />
            </div>
          </div>
        </div>
        <AppointmentForm />
      </section>
    </div>
  );
}
