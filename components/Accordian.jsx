"use client"
import React, { useState } from "react";
import DeleteBtn2 from "./DeleteBtn2";
import Link from "next/link";
import EditBtn from "./EditBtn";
import Toggle from "./Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ offer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-orange-200/10 rounded-b-lg">
            <div className="border-b rounded-md border-orange-400 mb-2">
                <div
                    className="flex justify-between items-center cursor-pointer p-4"
                    onClick={toggleAccordion}
                >
                    <h2 className="text-lg font-semibold">{offer.title}</h2>
                    <button className="text-xl">{isOpen ? <FontAwesomeIcon icon={faChevronUp} className="text-orange-200" /> : <FontAwesomeIcon icon={faChevronDown} className="text-gray-100" />}</button>
                </div>
                {isOpen && (
                    <div className="p-4">
                        <p className="mb-2"><strong>Description:</strong> {offer.description}</p>
                        <div className="mb-2"><Toggle /></div> 
                        <div className="flex justify-end space-x-2">
                            <DeleteBtn2 id={offer._id} />
                            <Link href={`./offers/${offer._id}`}>
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
