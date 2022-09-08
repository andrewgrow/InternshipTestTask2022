exports.getRate = (req, res) => {
    Promise.resolve(req.query['currency'])
        .then((currency) => {
            if (!currency || currency.trim().length === 0) {
                throw new Error('Empty currency query.');
            }
            return currency;
        }).then((currency) => {
            return fetch(`https://api.coincap.io/v2/rates/${currency}`);
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Response from remote server is bad.');
            }
        }).then((data) => {
            const result = data.data.rateUsd;
            if (result) {
                return res.status(200).json({ usd: result });
            } else {
                throw new Error('Remote rate not found.');
            }
        }).catch(() => {
            return res.status(404).send('Not found.');
    })
};