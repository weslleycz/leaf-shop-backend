-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birth_date" TEXT,
    "CPF_number" TEXT NOT NULL,
    "avatar" TEXT,
    "Addresses" JSONB NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requests" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "delivery_address" JSONB NOT NULL,
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "Subtotal" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "delivery" INTEGER NOT NULL,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "photograph" TEXT[],
    "type" TEXT NOT NULL,
    "farmerId" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farmers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birth_date" TEXT,
    "CPF_number" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "Farmers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_CPF_number_key" ON "Users"("CPF_number");

-- CreateIndex
CREATE UNIQUE INDEX "Requests_id_key" ON "Requests"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Farmers_id_key" ON "Farmers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Farmers_email_key" ON "Farmers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Farmers_CPF_number_key" ON "Farmers"("CPF_number");

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
