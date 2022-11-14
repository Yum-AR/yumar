-- CreateTable
CREATE TABLE "Actions" (
    "actionId" INTEGER NOT NULL,
    "code" VARCHAR,
    "name" VARCHAR,

    CONSTRAINT "Actions_pkey" PRIMARY KEY ("actionId")
);

-- CreateTable
CREATE TABLE "DietWarning" (
    "dietWarningId" INTEGER NOT NULL,
    "glutenFree" BOOLEAN,
    "halal" BOOLEAN,
    "kosher" BOOLEAN,
    "vegan" BOOLEAN,
    "vegetarian" BOOLEAN,
    "restaurantSettingsId" INTEGER,

    CONSTRAINT "DietWarning_pkey" PRIMARY KEY ("dietWarningId")
);

-- CreateTable
CREATE TABLE "Favorites" (
    "favoritesId" INTEGER NOT NULL,
    "menuItemId" INTEGER,
    "restaurantId" INTEGER,

    CONSTRAINT "Owners_pkey" PRIMARY KEY ("favoritesId")
);

-- CreateTable
CREATE TABLE "Genre" (
    "genreId" INTEGER NOT NULL,
    "genre" VARCHAR,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("genreId")
);

-- CreateTable
CREATE TABLE "MenuItems" (
    "menuItemId" INTEGER NOT NULL,
    "isPublished" BOOLEAN,
    "itemDescription" VARCHAR,
    "itemPrice" DECIMAL,
    "lastUpdatedDate" DATE,
    "menuHeaderId" INTEGER,
    "menuItem" VARCHAR,
    "modelApproval" BOOLEAN,
    "modelUrl" VARCHAR,
    "modelUpdate" VARCHAR,
    "restaurantId" INTEGER,
    "scaleCompensation" VARCHAR,
    "thumbnailUrl" VARCHAR,
    "userId" INTEGER,

    CONSTRAINT "MenuItems_pkey" PRIMARY KEY ("menuItemId")
);

-- CreateTable
CREATE TABLE "Permissions" (
    "permissionId" INTEGER NOT NULL,
    "actionId" INTEGER,
    "subjectId" INTEGER,

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("permissionId")
);

-- CreateTable
CREATE TABLE "RelatedPermissions" (
    "relatedPermissionsId" INTEGER NOT NULL,
    "permissionId" INTEGER,
    "relatedPermId" INTEGER,

    CONSTRAINT "RelatedPermissions_pkey" PRIMARY KEY ("relatedPermissionsId")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "restaurantId" INTEGER NOT NULL,
    "isApproved" BOOLEAN,
    "isFeatured" BOOLEAN,
    "restaurantDescription" VARCHAR,
    "restaurantName" VARCHAR,
    "websiteUrl" VARCHAR,
    "userId" INTEGER,
    "restaurantAddressId" INTEGER,
    "restaurantSettingsId" INTEGER,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("restaurantId")
);

-- CreateTable
CREATE TABLE "RestaurantAddress" (
    "restaurantAddressId" INTEGER NOT NULL,
    "city" VARCHAR,
    "state" VARCHAR,
    "street" VARCHAR,
    "zip" VARCHAR,

    CONSTRAINT "RestaurantAddress_pkey" PRIMARY KEY ("restaurantAddressId")
);

-- CreateTable
CREATE TABLE "RestaurantInformation" (
    "restaurantInformationId" INTEGER NOT NULL,
    "weekday" INTEGER,
    "startHour" TIMETZ(6),
    "endHour" TIMETZ(6),
    "restaurantId" INTEGER,

    CONSTRAINT "RestaurantInformation_pkey" PRIMARY KEY ("restaurantInformationId")
);

-- CreateTable
CREATE TABLE "RestaurantSettings" (
    "restaurantSettingsId" INTEGER NOT NULL,
    "priceRange" VARCHAR,
    "restaurantHeaderImageUrl" VARCHAR,
    "restaurantThumbnailImageUrl" VARCHAR,

    CONSTRAINT "RestaurantSettings_pkey" PRIMARY KEY ("restaurantSettingsId")
);

-- CreateTable
CREATE TABLE "RestaurantSettingsGenre" (
    "restaurantSettingsGenreId" INTEGER NOT NULL,
    "genreId" INTEGER,
    "restaurantSettingsId" INTEGER,

    CONSTRAINT "RestaurantSettingsGenre_pkey" PRIMARY KEY ("restaurantSettingsGenreId")
);

-- CreateTable
CREATE TABLE "Roles" (
    "roleId" INTEGER NOT NULL,
    "role" VARCHAR,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "RolesPermissions" (
    "rolesPermissionsId" INTEGER NOT NULL,
    "roleId" INTEGER,
    "permissionId" INTEGER,

    CONSTRAINT "RolesPermissions_pkey" PRIMARY KEY ("rolesPermissionsId")
);

-- CreateTable
CREATE TABLE "Subjects" (
    "subjectId" INTEGER NOT NULL,
    "code" VARCHAR,
    "name" VARCHAR,

    CONSTRAINT "Subjects_pkey" PRIMARY KEY ("subjectId")
);

-- CreateTable
CREATE TABLE "UserRoles" (
    "userRolesId" INTEGER NOT NULL,
    "userId" INTEGER,
    "roleId" INTEGER,

    CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("userRolesId")
);

-- CreateTable
CREATE TABLE "UserRestaurant" (
    "userRestaurant" INTEGER NOT NULL,
    "userId" INTEGER,
    "restaurantId" INTEGER,

    CONSTRAINT "UserRestaurant_pkey" PRIMARY KEY ("userRestaurant")
);

-- CreateTable
CREATE TABLE "YumARUser" (
    "userId" SERIAL NOT NULL,
    "email" VARCHAR,
    "name" VARCHAR,
    "timestamp" TIMESTAMPTZ(6),

    CONSTRAINT "YumARUser_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE INDEX "fki_Favorites_to_MenuItems_Fkey" ON "Favorites"("menuItemId");

-- CreateIndex
CREATE INDEX "fki_Favorites_to_Restaurant_fkey" ON "Favorites"("restaurantId");

-- CreateIndex
CREATE INDEX "fki_MenuItems_to_Restaurant_fkey" ON "MenuItems"("restaurantId");

-- CreateIndex
CREATE INDEX "fki_menuitems_to_yumaruser" ON "MenuItems"("userId");

-- CreateIndex
CREATE INDEX "fki_Restaurant_to_YumARUser_fkey" ON "Restaurant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "DietWarning" ADD CONSTRAINT "dietwarning_to_restaurantsettings_fkey" FOREIGN KEY ("restaurantSettingsId") REFERENCES "RestaurantSettings"("restaurantSettingsId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_to_MenuItems_Fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItems"("menuItemId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_to_Restaurant_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("restaurantId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "MenuItems_to_Restaurant_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("restaurantId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "menuitems_to_yumaruser_fkey" FOREIGN KEY ("userId") REFERENCES "YumARUser"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Permissions" ADD CONSTRAINT "Actions_Permissions_fkey" FOREIGN KEY ("actionId") REFERENCES "Actions"("actionId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Permissions" ADD CONSTRAINT "Subjects_Permissions_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subjects"("subjectId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RelatedPermissions" ADD CONSTRAINT "permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permissions"("permissionId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RelatedPermissions" ADD CONSTRAINT "relatedPermId_fkey" FOREIGN KEY ("relatedPermId") REFERENCES "Permissions"("permissionId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_to_RestaurantAddress_fkey" FOREIGN KEY ("restaurantAddressId") REFERENCES "RestaurantAddress"("restaurantAddressId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_to_RestaurantSettings_fkey" FOREIGN KEY ("restaurantSettingsId") REFERENCES "RestaurantSettings"("restaurantSettingsId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_to_YumARUser_fkey" FOREIGN KEY ("userId") REFERENCES "YumARUser"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RestaurantInformation" ADD CONSTRAINT "restaurantinformation_to_restaurant_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("restaurantId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RestaurantSettingsGenre" ADD CONSTRAINT "RestaurantSettingsGenre_to_Genre" FOREIGN KEY ("genreId") REFERENCES "Genre"("genreId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RestaurantSettingsGenre" ADD CONSTRAINT "RestaurantSettingsGenre_to_RestaurantSettings_fkey" FOREIGN KEY ("restaurantSettingsId") REFERENCES "RestaurantSettings"("restaurantSettingsId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RolesPermissions" ADD CONSTRAINT "Permissions_RolesPermissions_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permissions"("permissionId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "RolesPermissions" ADD CONSTRAINT "Roles_RolesPermissions_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("roleId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "Roles_UserRoles_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("roleId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "User_UserRoles_fkey" FOREIGN KEY ("userId") REFERENCES "YumARUser"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserRestaurant" ADD CONSTRAINT "UserRestaurant_Restaurant_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("restaurantId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserRestaurant" ADD CONSTRAINT "UserRestaurant_User_fkey" FOREIGN KEY ("userId") REFERENCES "YumARUser"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
