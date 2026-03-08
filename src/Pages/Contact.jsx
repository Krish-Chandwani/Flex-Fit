import { assets } from "../Assets/assets";
import Title from "../Components/Title";

const Contact = () => {
  return (
    <div className="border-t pt-16">

      <div className="text-3xl text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 mb-20">

        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="contact"
        />

        <div className="flex flex-col justify-center items-start gap-6">

          <p className="font-semibold text-xl text-gray-700">
            Our Store
          </p>

          <p className="text-gray-600">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>

          <p className="text-gray-600">
            Tel: +1 (000) 000-0000 <br />
            Email: support@flexfit.com
          </p>

          <p className="font-semibold text-xl text-gray-700">
            Careers at FlexFit
          </p>

          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
            Explore Jobs
          </button>

        </div>

      </div>

    </div>
  );
};

export default Contact;
