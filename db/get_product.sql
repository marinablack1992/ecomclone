select products.*, images.* from products
join images on images.product_id = products.product_id
where products.product_id = $1;