import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QOHjaA8xPGsIqY-bFZ9zKM4fYSsx5NGpGd8u6ONlTrku3vhNTiOzi6r62NJwLj8t86R-0lTrcf8bbrxb2ALnuI53p37rD6GzlgSx9Nf0LrH8favCMEIGZXCyRBHZZXYx',
        Accept: 'application/json',
    }
});

