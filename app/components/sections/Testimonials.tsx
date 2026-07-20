"use client";

import React from "react";
import testimonialsData from "../../data/testimonials.json";

export default function Testimonials() {
  return (
    <section
      className="
      relative z-20 overflow-hidden
      bg-[#F7F4EC]
      py-24 md:py-32
      "
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#B9924E]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="fade-in-section mx-auto mb-16 flex max-w-xl flex-col items-center space-y-5 text-center md:mb-20">

          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#B9924E]" />

            <span className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.4em]
            text-[#B9924E]
            ">
              Verifiable Experiences
            </span>

            <span className="h-[1px] w-8 bg-[#B9924E]" />
          </div>


          <h2 className="
          font-serif
          text-4xl
          font-light
          tracking-wide
          text-[#273124]
          md:text-5xl
          ">
            Whispers of{" "}
            <span className="italic text-[#B9924E]">
              Étoile
            </span>
          </h2>


          <p className="
          text-sm
          font-light
          leading-relaxed
          text-[#5F6658]
          ">
            Discover the emotions, memories, and moments created by our
            signature fragrances around the world.
          </p>

        </div>


        {/* Reviews */}
        <div className="
        grid
        grid-cols-1
        gap-8
        md:grid-cols-3
        ">

          {testimonialsData.map((review, i) => (

            <div
              key={i}
              className="
              fade-in-section
              group
              relative
              flex
              flex-col
              rounded-[28px]
              border
              border-[#D8D0BC]
              bg-[#FDFBF5]
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#B9924E]/50
              hover:shadow-xl
              "
            >

              {/* Quote Icon */}
              <div className="
              absolute
              right-8
              top-6
              font-serif
              text-6xl
              leading-none
              text-[#B9924E]/15
              ">
                “
              </div>


              {/* Stars */}
              <div className="mb-6 flex gap-1">

                {[...Array(review.rating)].map((_, idx) => (

                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="
                    h-4
                    w-4
                    text-[#B9924E]
                    "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>

                ))}

              </div>


              {/* Review */}
              <p className="
              relative
              z-10
              flex-grow
              text-sm
              font-light
              italic
              leading-relaxed
              text-[#5F6658]
              ">
                “{review.quote}”
              </p>



              {/* Bottom */}
              <div className="
              mt-8
              flex
              items-center
              justify-between
              border-t
              border-[#D8D0BC]
              pt-5
              ">

                <div>

                  <h4 className="
                  font-serif
                  text-base
                  font-light
                  tracking-wide
                  text-[#273124]
                  ">
                    {review.name}
                  </h4>


                  <span className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#777B70]
                  ">
                    {review.location}
                  </span>

                </div>


                <span className="
                rounded-full
                border
                border-[#B9924E]/30
                bg-[#F7F4EC]
                px-3
                py-1
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#B9924E]
                ">
                  {review.perfume}
                </span>


              </div>


              {/* Decorative line */}
              <div className="
              mx-auto
              mt-6
              h-[1px]
              w-10
              bg-[#B9924E]/40
              transition-all
              duration-500
              group-hover:w-20
              " />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}