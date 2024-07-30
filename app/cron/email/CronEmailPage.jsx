"use client"
import React, {useEffect} from 'react'
import moment from 'moment';
import * as Realm from "realm-web";

const loginEmailPassword = async (email, password) => {
    const app = new Realm.App({ id: 'data-gacfoem' });
    const credentials = Realm.Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);
    console.assert(user.id === app.currentUser.id);
    return user;
};

const CronEmailPage = () => {

    useEffect(() => {
        handleClick();
    }, []);

    const handleClick = async () => {
        const daysCount = 15;
        const today = moment();
        const daysAgo = today.subtract(daysCount, 'days').toDate();

        const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');

        const customers = await fetchAllCustomers(user, daysAgo);
        const offers = await fetchAllOffers(user);
        const ownerToCustomersOffersMap = getOwnerToCustomersOffersMap(customers.documents, offers.documents);

        sendEmail(ownerToCustomersOffersMap);
    }

    const fetchAllCustomers = async (user, daysAgo) => {
        try {
            const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action' + '/find', {
                method: 'POST',
                headers: {
                    'Access-Control-Request-Headers': '*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user.accessToken
                },
                cache: "no-cache",
                body: JSON.stringify({
                    "collection": "customers",
                    "database": "customersDB",
                    "dataSource": "Cluster0",
                    "filter": { "date": { $lte: daysAgo } },
                    "projection": {}
                })
            });
            if (!res.ok) {
                throw new Error("Failed to fetch Offers");
            }
            return res.json();
        } catch (error) {
            console.error("Error in Loading", error);
            return { customers: [] };
        }
    }

    const fetchAllOffers = async (user) => {
        try {
            const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action' + '/find', {
                method: 'POST',
                headers: {
                    'Access-Control-Request-Headers': '*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user.accessToken
                },
                cache: "no-cache",
                body: JSON.stringify({
                    "collection": "offers",
                    "database": "offersDB",
                    "dataSource": "Cluster0",
                    "projection": {}
                })
            });
            if (!res.ok) {
                throw new Error("Failed to fetch Offers");
            }
            return res.json();
        } catch (error) {
            console.error("Error in Loading", error);
            return { offers: [] };
        }
    }

    const getOwnerToCustomersOffersMap = (customers, offers) => {
        const ownerToCustomersOffersMap = new Map();
        console.log(customers)
        // populate customers in map
        customers.forEach(customer => {
            const owner_id = customer.owner_id;
            if (!ownerToCustomersOffersMap.has(owner_id)) {
                ownerToCustomersOffersMap.set(owner_id, {
                    customers: [],
                    offers: []
                });
            }
            ownerToCustomersOffersMap.get(owner_id).customers.push(customer);
        });

        // populate offers in map
        offers.forEach(offer => {
            const owner_id = offer.owner_id;
            if (!ownerToCustomersOffersMap.has(owner_id)) {
                ownerToCustomersOffersMap.set(owner_id, {
                    customers: [],
                    offers: []
                });
            }
            ownerToCustomersOffersMap.get(owner_id).offers.push(offer);
        });

        return ownerToCustomersOffersMap;
    }

    const sendEmail = async (ownerToCustomersOffersMap) => {
        ownerToCustomersOffersMap.forEach((details, owner_id) => {
            console.log(`owner: ${owner_id}`);
            if(details.offers.length>0 && details.customers.length >0){
                details.customers.forEach(customer=>{
                    console.log(`customer name: ${customer.name}; offers: ${details.offers}`);
                });
            }
        })
    }

    return (
        <div>
        </div>
    )
}

export default CronEmailPage