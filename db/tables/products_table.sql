CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    title VARCHAR(180),
    rating INTEGER,
    reviewCount INTEGER,
    price INTEGER,
    color VARCHAR(180),
    itemType VARCHAR(180),
    category VARCHAR(180),
    specialcategory VARCHAR(180),
    productionType VARCHAR(180),
    quantity VARCHAR(180),
    itemDesc TEXT,
    seller_id INTEGER REFERENCES users(id)
)