"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GrUpdate } from "react-icons/gr";

export default function EditOffersForm({ id, offer }) {
  const [newOffer, setNewOffer] = useState(offer);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/offers/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newOffer),
      });
      if (!res.ok) {
        throw new Error("failed to update");
      }
      router.push("/pages/offers");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="flex justify-center glow-text text-4xl font-thin p-10">
          EditCustomersForm
        </h1>
        <div className=" flex justify-center items-center p-10">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center rounded-lg px-4 py-2 bg-orange-200"
          >
            <div className="flex flex-col justify-center shadow-lg shadow-black rounded-lg px-4 py-2 m-4 ">
              <label className="p-2 text-gray-800"> Title : </label>
              <input
                className="border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent"
                onChange={(e) =>
                  setNewOffer({ ...newOffer, title: e.target.value })
                }
                value={newOffer.title}
              />
              <label className="p-2  text-gray-800"> Description : </label>
              <input
                className="border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent"
                onChange={(e) =>
                  setNewOffer({ ...newOffer, description: e.target.value })
                }
                value={newOffer.description}
                type="tel"
                id="phone"
                name="phone"
              />
              <label className="p-2  text-gray-800"> isActive :</label>
              <input
                className="border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent"
                onChange={(e) =>
                  setNewOffer({ ...newOffer, isActive: e.target.value })
                }
                value={newOffer.isActive}
                type="checkbox"
              />

              <button className="mt-6 mb-4 px-4 py-2 rounded-md bg-orange-500 flex flex-row justify-center items-center rounded-badge">
                <span className="mr-2">Update</span> <GrUpdate />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
