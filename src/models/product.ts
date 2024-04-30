export interface Gallery {
    id?: number;
    product_id: number;
    thumbnail: string;
}

export interface Product {
    id?: number;
    category: string;
    title: string;
    description?: string;
    quantity: string;
    price: string;
    discount?: string;
    create_at?: string;
    updated_at?: string;
    galleries: Array<Gallery>;
}
