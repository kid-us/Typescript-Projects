// https://mywebsite.com/users
// https://mywebsite.com/products

interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url: string): Result<T>{
    return {data:null, error:null};
}

interface Users{
    username: string;
}

interface Product{
    title: string;
}

let result = fetch<Product>('url');
result.data?.title