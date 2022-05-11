-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "CPF_number" TEXT NOT NULL,
    "avatar" TEXT,
    "Addresses" JSONB[],
    "phone" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchases" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT E'Preparando o Pedido',
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "delivery_address" JSONB NOT NULL,
    "phone" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "delivery" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "cooperativeId" TEXT NOT NULL,
    "surrender" INTEGER NOT NULL,

    CONSTRAINT "Purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "photograph" TEXT[],
    "type" TEXT NOT NULL,
    "cooperativeId" TEXT,
    "purchaseId" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cooperatives" (
    "id" TEXT NOT NULL,
    "CNPJ_number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Addresses" JSONB[],
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "surrender" INTEGER NOT NULL,
    "minimum_value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cooperatives_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_CPF_number_key" ON "Users"("CPF_number");

-- CreateIndex
CREATE UNIQUE INDEX "Purchases_id_key" ON "Purchases"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cooperatives_CNPJ_number_key" ON "Cooperatives"("CNPJ_number");

-- CreateIndex
CREATE UNIQUE INDEX "Cooperatives_email_key" ON "Cooperatives"("email");

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_cooperativeId_fkey" FOREIGN KEY ("cooperativeId") REFERENCES "Cooperatives"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_cooperativeId_fkey" FOREIGN KEY ("cooperativeId") REFERENCES "Cooperatives"("id") ON DELETE SET NULL ON UPDATE CASCADE;
