import EditCustomersForm from '@/components/EditCustomersForm'
import React from 'react'


const getCustomerById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/customers/${id}`, {cache: 'no-cache'});

    if (!res.ok) {
      throw new Error("Failed to fetch")
    }
    return res.json();

  } catch (error) {
    console.log(error)
  }

}

async function EditCustomer({ params }) {
  const { id } = params;
  const { customer } = await getCustomerById(id)
  return (
    <EditCustomersForm id={id} customer={customer} />
  )
}

export default EditCustomer