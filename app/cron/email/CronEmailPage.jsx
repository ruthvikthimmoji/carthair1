"use client"
import React, { useEffect } from 'react'
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
        ownerToCustomersOffersMap.forEach(async (details, owner_id) => {
            // send if there are offers and customers for this owner
            if (details.offers.length > 0 && details.customers.length > 0) {
                // create HTML for all offers
                const htmlContent = createHTMLContent(details.offers);

                const subject = "Exciting New Deals - See What's in Store for You!"
                const to = details.customers.map(customer => {
                    return {
                        "email": customer.email,
                        "name": customer.name
                    }
                });
                const sender = { "email": "thimmojiruthvik@gmail.com", "name": "CartHair@Official" }

                const res = await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'Access-Control-Request-Headers': '*',
                        'Content-Type': 'application/json',
                        'api-key': 'xkeysib'+'-8543c5cc1'+'ca8717230e0'+'5eb549a15764'+'f2e48f79c893'+'43e9367da0f3524b'+'9e97-qo8'+'n4x4EGs8Q8EEV'
                    },
                    cache: "no-cache",
                    body: JSON.stringify({
                        "to": to,
                        "sender": sender,
                        "subject": subject,
                        "htmlContent": htmlContent
                    })
                });
                console.log(res.json());
            }
        })
    }

    const createHTMLContent = (offers) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Special Offers</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    width: 80%;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    text-align: center;
                    color: #007BFF;
                }
                .offer {
                    margin-bottom: 20px;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    background-color: #f9f9f9;
                }
                .offer-title {
                    font-size: 1.2em;
                    color: #333;
                    margin-bottom: 10px;
                }
                .offer-description {
                    font-size: 1em;
                    color: #555;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Special Offers Just for You!</h1>
                <!-- Offer 1 -->
                ${offers.map(offer => `
                    <div class="offer">
                    <div class="offer-title">${offer.title}</div>
                    <div class="offer-description">${offer.description}</div>
                </div>
            `)}
            </div>
        </body>
        </html>`;
    }

    return (
        <div>
        </div>
    )
}

export default CronEmailPage