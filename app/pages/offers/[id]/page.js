import EditOffersForm from '@/components/EditOffersForm'
import React from 'react'


const getOfferById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/offers/${id}`, {cache: 'no-cache'});

    if (!res.ok) {
      throw new Error("Failed to fetch")
    }
    return res.json();

  } catch (error) {
    console.log(error)
  }

}

async function EditOffer({ params }) {
  const { id } = params;
  const { offer } = await getOfferById(id)
  return (  
    <EditOffersForm id={id} offer={offer} />
  )
}

export default EditOffer