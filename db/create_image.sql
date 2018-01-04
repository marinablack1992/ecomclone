insert into images(image_url, product_id)
values ($1, $2);

select * from images
where product_id = $2;