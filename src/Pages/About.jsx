import { assets } from "../Assets/assets";
import Title from "../Components/Title";
import NewsLetterBox from "../Components/NewsLetterBox"

const About = () => {
  return (
    <div className="border-t pt-16">

      <div className="text-3xl text-center">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">

        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">

          <p>
            FlexFit is a modern fashion platform designed to provide stylish,
            comfortable, and high-quality clothing for everyday wear. Our goal
            is to combine fashion with comfort so that customers can express
            their style with confidence.
          </p>

          <p>
            Our collection includes a wide range of clothing for men, women, and
            kids. Each product is carefully selected to ensure quality,
            durability, and a modern look that fits perfectly with today's
            lifestyle.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            Our mission is to make fashion accessible and enjoyable for
            everyone. We strive to provide high-quality products, smooth
            shopping experiences, and excellent customer service while keeping
            our customers at the center of everything we do.
          </p>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We ensure every product meets high-quality standards so that our
            customers receive the best value and durability.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Our platform provides a smooth and simple shopping experience with
            easy navigation and secure checkout.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our team is always ready to assist customers and ensure a satisfying
            shopping experience from start to finish.
          </p>
        </div>

      </div>

      <NewsLetterBox/>

    </div>
  );
};

export default About;
