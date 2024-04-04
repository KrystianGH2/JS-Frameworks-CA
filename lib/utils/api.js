export const getProduct = async (limit = 25, page = 1) => {
    try {
        const url = `${process.env.API_URL}?limit=${limit}&page=${page}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch products');
    }
};


export const getProductById = async (Id) => {
    try {
        const url = `${process.env.API_URL}/${Id}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch products');
    }
};
