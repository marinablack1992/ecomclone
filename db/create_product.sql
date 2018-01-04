insert into products(title, price, color, itemtype, category, productiontype, quantity, itemdesc, seller_id)
values($1, $2, $3, $4, $5, $6, $7, $8, $9);

select * from products
where seller_id =  $9;