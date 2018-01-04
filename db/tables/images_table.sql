create table images(
image_id serial primary key,
image_url text,
product_id integer references products(product_id)
)