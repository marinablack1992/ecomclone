select products.*, images.* from products
join images on images.product_ref = products.product_id
where products.category = $1;