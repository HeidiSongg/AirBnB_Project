#Spots
npx sequelize model:generate --name Spot --attributes ownerId:integer,address:string,city:string,state:string,country:string,lat:decimal,lng:decimal,name:string,description:string,price:decimal,previewImage:string

npx sequelize migration:generate --name add-ownerId-to-spots

npx sequelize seed:generate --name spots

#Bookings
npx sequelize model:generate --name Booking --attributes startDate:date,endDate:date

npx sequelize seed:generate --name bookings

#Reviews
npx sequelize model:generate --name Review --attributes review:string,stars:integer

npx sequelize seed:generate --name reviews

#ReviewImages
npx sequelize model:generate --name ReviewImage --attributes url:string

npx sequelize seed:generate --name review-images

#SpotImages
npx sequelize model:generate --name SpotImage --attributes url:string
npx sequelize seed:generate --name spot-images