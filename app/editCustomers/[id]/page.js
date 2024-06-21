import EditCustomersForm from '@/components/EditCustomersForm'
import React from 'react'


const getCustomersById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/customers/${id}`
    );

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
  const { customer } = await getCustomersById(id)
  const { name,phonenumber,date,attendant,services} = customer;
  return (
    <EditCustomersForm id={id} name={name} phonenumber={phonenumber} date={date} attendant={attendant} services={services} />
  )
}

export default EditCustomer