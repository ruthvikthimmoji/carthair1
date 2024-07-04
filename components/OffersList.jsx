import React from "react";
import AddOffers from "./AddOffers";
import Accordion from "./Accordian";
import NavbarAll from "./NavbarAll";

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/offers", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch");
    }

    const offers = await res.json();

    return {
      props: {
        offers,
      },
    };
  } catch (error) {
    console.log("Error in loading", error);
    return {
      props: {
        offers: [],
      },
    };
  }
}

const OffersList = ({ offers }) => {
  return (
    <div>
      <NavbarAll />
      <h1 className="text-4xl font-thin flex flex-col justify-center items-center p-4 m-6 w-screen ">
        OFFER DETAILS
      </h1>
      <div className="flex justify-end p-4">
        <AddOffers />
      </div>
      <div className="p-4">
        <Accordion offers={offers} />
      </div>
    </div>
  );
};

export default OffersList;
