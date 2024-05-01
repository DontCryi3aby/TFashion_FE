export interface Gallery {
    id?: number;
    product_id: number;
    thumbnail: string;
}

export interface GalleryPayload {
    file: File;
    previewUrl: string;
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

export interface ProductPayload {
    id?: number;
    category_id: string;
    title: string;
    description?: string;
    quantity: string;
    price: string;
    discount?: string;
    create_at?: string;
    updated_at?: string;
    galleries: [] | Array<GalleryPayload>;
}
