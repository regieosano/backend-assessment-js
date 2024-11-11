## Solution to the Technical Assessment

So this was created using NodeJS, Typescript and the PRISMA ORM.

As per instructiions I followed everything except, if it's required, the Cloudflare Deployment.
I'm not quite familliar with cloudflare but I have knowledge of the platform. I did try to use cloudflare in this tech exam but I encountered errors.
So I just decided not to make it cloudflare ready.

For the credentials of NEON DATABASE:

Email/LoginName: rgo02439@gmail.com
Password:        nA!D9!F6bJeWGRF

****************************************************************************************************************************
.env (content)

SERVER_PORT=7000

MAIN_URL=/api/products
DELETE_DATA=:product_id

PRODUCT_GET_URL=https://02557f4d-8f03-405d-a4e7-7a6483d26a04.mock.pstmn.io/get
PRODUCT_POST_URL=https://02557f4d-8f03-405d-a4e7-7a6483d26a04.mock.pstmn.io/getProducts

DATABASE_URL="postgresql://neondb_owner:LrEyRg2I9Mqt@ep-wild-mud-a5a7xxnc.us-east-2.aws.neon.tech/mindarcdb?sslmode=require"
*****************************************************************************************************************************

The project name is  -  FiltaProductExam
DB Name              -  mindarcdb 

The CRUD apis are straightforward as what I understood in the instructions.

There is also a build script for production deployment.

That's all. Thanks!

