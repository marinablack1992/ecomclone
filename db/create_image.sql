insert into images(image_url, product_ref)
values ($1, $2);

select * from images
where product_ref = $2;