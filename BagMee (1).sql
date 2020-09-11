CREATE TYPE "document_types" AS ENUM (
  'aadhar',
  'dl',
  'photo'
);

CREATE TYPE "order_status" AS ENUM (
  'ordered',
  'confirmed',
  'arriving',
  'delivered'
);

CREATE TYPE "ticket_types" AS ENUM (
  'user',
  'driver',
  'store'
);

CREATE TABLE "user" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "mobile" float UNIQUE,
  "name" varchar,
  "active" boolean
);

CREATE TABLE "user_addresses" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "address_id" uuid,
  "user_id" uuid
);

CREATE TABLE "address" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" varchar,
  "street_one" varchar,
  "street_two" varchar,
  "city" varchar DEFAULT 'Bangalore',
  "country" varchar DEFAULT 'India',
  "region" varchar DEFAULT 'Karnataka',
  "pincode" float,
  "lat" float,
  "lng" float,
  "mobile" float UNIQUE,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "product" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" varchar,
  "description" varchar,
  "offer" boolean,
  "active" boolean,
  "cost_price" float,
  "selling_price" float,
  "discounted_price" float,
  "store_id" uuid,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "rating" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "rating" float,
  "product_id" uuid,
  "user_id" uuid,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "driver" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "mobile" float UNIQUE,
  "name" varchar,
  "address_id" uuid,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "driver_document" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "url" varchar,
  "type" document_types,
  "driver_id" uuid,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "order" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "driver_id" uuid,
  "ref_no" varchar,
  "otp" varchar,
  "store_id" uuid,
  "shipping_cost" float,
  "pickup_address_id" uuid,
  "drop_address_id" uuid,
  "total_commission" float,
  "created_at" timestamptz DEFAULT (now()),
  "active" boolean,
  "status" order_status
);

CREATE TABLE "store" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "logo" varchar,
  "address_id" uuid,
  "active" boolean,
  "created_at" timestamptz DEFAULT (now()),
  "name" varchar
);

CREATE TABLE "store_document" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "store_id" uuid,
  "url" varchar,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "bank_detail" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "account_no" float,
  "account_name" varchar,
  "ifsc_code" varchar,
  "created_at" timestamptz DEFAULT (now()),
  "bank_name" varchar,
  "driver_id" uuid,
  "store_id" uuid
);

CREATE TABLE "order_products" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "product_id" uuid,
  "order_id" uuid,
  "quantity" float,
  "size" varchar,
  "selling_price" float,
  "discounted_price" float,
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "product_image" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "created_at" timestamptz DEFAULT (now()),
  "image_url" varchar,
  "product_id" uuid
);

CREATE TABLE "size" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" varchar UNIQUE,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "transaction" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "order_id" uuid,
  "amount" float,
  "tax" float,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "ticket" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "driver_id" uuid,
  "store_id" uuid,
  "type" ticket_types,
  "name" varchar,
  "open" boolean,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "ticket_history" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "message" varchar,
  "admin" boolean DEFAULT false,
  "ticket_id" uuid,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "product_sizes" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "product_id" uuid,
  "size_id" uuid,
  "created_at" timestamptz DEFAULT (now())
);

ALTER TABLE "user_addresses" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "driver" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("store_id") REFERENCES "store" ("id");

ALTER TABLE "rating" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "rating" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "store" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "user_addresses" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "product_image" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "order_products" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "order_products" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");

ALTER TABLE "product_sizes" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "product_sizes" ADD FOREIGN KEY ("size_id") REFERENCES "size" ("id");

ALTER TABLE "driver_document" ADD FOREIGN KEY ("driver_id") REFERENCES "driver" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("driver_id") REFERENCES "driver" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("pickup_address_id") REFERENCES "address" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("drop_address_id") REFERENCES "address" ("id");

ALTER TABLE "ticket" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "ticket" ADD FOREIGN KEY ("store_id") REFERENCES "store" ("id");

ALTER TABLE "ticket" ADD FOREIGN KEY ("driver_id") REFERENCES "driver" ("id");

ALTER TABLE "ticket_history" ADD FOREIGN KEY ("ticket_id") REFERENCES "ticket" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "bank_detail" ADD FOREIGN KEY ("driver_id") REFERENCES "driver" ("id");

ALTER TABLE "bank_detail" ADD FOREIGN KEY ("store_id") REFERENCES "store" ("id");

ALTER TABLE "store_document" ADD FOREIGN KEY ("store_id") REFERENCES "store" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("store_id") REFERENCES "store" ("id");
