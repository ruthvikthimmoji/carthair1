import React from "react";
import DeleteBtn2 from "./DeleteBtn2";
import Link from "next/link";
import EditBtn from "./EditBtn";
import AddOffers from "./AddOffers";
import Toggle from "./Toggle";

const getOffers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/offers", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.log("Error in loading", error);
  }
};

export default async function OffersList() {
  const { offers } = await getOffers();

  return (
    <div>
      <h1 className="text-4xl font-thin flex flex-col justify-center items-center p-4 m-4 w-screen">
        OFFER DETAILS
      </h1>
      <div>
        <div className="flex justify-between  backdrop-blur-sm bg-orange-100/10  p-4">
          <table className="border rounded-md border-orange-400 border-separate w-screen my-6 table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">
                  Offer
                </th>
                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">
                  Description
                </th>
                <th className="px-2 py-2 border rounded-md border-orange-400 text-left">
                  isActive
                </th>
                <th className="px-4 py-2 border rounded-md border-orange-400 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="border border-separate">
              {offers.map((f) => (
                <tr key={f._id}>
                  <td className="border-r p-2 ">{f.title}</td>
                  <td className="border-r p-2">{f.description}</td>
                  <td className="border-r p-2">
                    {f.isActive} <Toggle />
                  </td>

                  <td className="flex  flex-row justify-center px-2 py-2">
                    <DeleteBtn2 id={f._id} />
                    <Link href={`./offers/${f._id}`}>
                      <EditBtn />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end p-4">
          <AddOffers />
        </div>
      </div>
    </div>
  );
}
