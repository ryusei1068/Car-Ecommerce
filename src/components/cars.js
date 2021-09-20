const CARS = [
    {
        Model: "Model 3",
        Category: "Tesla",
        Price: 48490,
        Date: new Date(2020, 9, 4),
        Image: "https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU="
    },
    {
        Model: "Model X",
        Category: "Tesla",
        Price: 89990,
        Date: new Date(2017, 8, 8),
        Image: "https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM="
    },
    {
        Model: "Model S",
        Category: "Tesla",
        Price: 82990,
        Date: new Date(2019, 4, 1),
        Image: "https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg="
    },
    {
        Model: "Model Y",
        Category: "Tesla",
        Price: 48190,
        Date: new Date(2020, 2, 2),
        Image: "https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8="
    },
    {
        Model: "Cayenne",
        Category: "Porche",
        Price: 67500,
        Date: new Date(2017, 12, 20),
        Image: "https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME="
    },
    {
        Model: "Macan",
        Category: "Porche",
        Price: 52100,
        Date: new Date(2019, 7, 12),
        Image: "https://media.istockphoto.com/photos/porsche-macan-gts-crossover-suv-picture-id508107322?k=6&m=508107322&s=612x612&w=0&h=syLuqvZng-mEbqJblhY3q6wWxcUlaijknWO9ea90CJo="
    },
    {
        Model: "Camry",
        Category: "Toyota",
        Price: 24425,
        Date: new Date(2015, 6, 29),
        Image: "https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI="
    },
    {
        Model: "Accord",
        Category: "Honda",
        Price: 24800,
        Date: new Date(2018, 10, 2),
        Image: "https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8="
    },
    {
        Model: "Civic",
        Category: "Honda",
        Price: 20650,
        Date: new Date(2015, 4, 4),
        Image: "https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4="
    },
    {
        Model: "CX-5",
        Category: "Mazda",
        Price: 26940,
        Date: new Date(2012, 11, 3),
        Image: "https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg="
    },
    {
        Model: "GLE Coupe",
        Category: "Mercedes-Benz",
        Price: 76500,
        Date: new Date(2020, 2, 5),
        Image: "https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M="
    },
    {
        Model: "CLA",
        Category: "Mercedes-Benz",
        Price: 37850,
        Date: new Date(2019, 6, 9),
        Image: "https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M="
    },
    {
        Model: "GLA 250",
        Category: "Mercedes-Benz",
        Price: 37280,
        Date: new Date(2017, 5, 2),
        Image: "https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU="
    },
    {
        Model: "RX 350",
        Category: "Lexus",
        Price: 45170,
        Date: new Date(2015, 1, 1),
        Image: "https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw="
    },
    {
        Model: "NX 300",
        Category: "Lexus",
        Price: 37510,
        Date: new Date(2018, 9, 12),
        Image: "https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8="
    },
    {
        Model: "Urus",
        Category: "Lamborghini",
        Price: 218000,
        Date: new Date(2021, 8, 16),
        Image: "https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA="
    },
    {
        Model: "Aventador",
        Category: "Lamborghini",
        Price: 393695,
        Date: new Date(2020, 9, 11),
        Image: "https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU="
    },
    {
        Model: "A3",
        Category: "Audi",
        Price: 33500,
        Date: new Date(2019, 5, 8),
        Image: "https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8="
    },
    {
        Model: "X3",
        Category: "BMW",
        Price: 43000,
        Date: new Date(2018, 3, 11),
        Image: "https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y="
    },
    {
        Model: "2 Seriex",
        Category: "BMW",
        Price: 37500,
        Date: new Date(2019, 1, 15),
        Image: "https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4="
    },
]


export default CARS;
