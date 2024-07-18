"use client"
import React, { useState } from "react";
import DeleteBtn2 from "./DeleteBtn2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EditBtn from "./EditBtn";
import Toggle from "./Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ offer }) => {
    const [currOffer, setCurrOffer] = useState(offer);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (e, checked) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/offers/${currOffer._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ ...currOffer, isActive: checked }),
            });
            if (!res.ok) {
                throw new Error("failed to update");
            }
            setCurrOffer({ ...currOffer, isActive: checked });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-orange-200/10 rounded-b-lg">
            <div className="border-b rounded-md border-orange-400 mb-2">
                <div
                    className="flex justify-between items-center cursor-pointer p-4"
                    onClick={toggleAccordion}
                >
                    <h2 className="text-lg font-semibold">{currOffer.title}</h2>
                    <button className="text-xl">{isOpen ?
                        <FontAwesomeIcon icon={faChevronUp} className="text-orange-200" /> :
                        <FontAwesomeIcon icon={faChevronDown} className="text-gray-100" />
                    }
                    </button>
                </div>
                {isOpen && (
                    <div className="p-4">
                        <p className="mb-2"><strong>Description:</strong> {currOffer.description}</p>
                        <div className="mb-2"><Toggle isChecked={currOffer.isActive} onSwitchChange={handleSubmit} /></div>
                        <div className="flex justify-end space-x-2">
                            <DeleteBtn2 id={currOffer._id} />
                            <Link href={`./offers/${currOffer._id}`}>
                                <EditBtn />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const Accordion = ({ offers }) => {
    return (
        <div className="space-y-2 border rounded-lg shadow-[0_0_5px_0] backdrop-blur-10 bg-slate-900/10 p-4 ">
            {offers && offers.map((offer) => (
                <AccordionItem key={offer._id} offer={offer} />
            ))}
        </div>
    );
};

export default Accordion;
