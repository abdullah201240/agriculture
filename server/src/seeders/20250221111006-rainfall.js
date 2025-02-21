
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed commands here.
    // Example:
    await queryInterface.bulkInsert('rainFalls', [
      { city: 'Dhaka', month: 'JAN', rainfall: 7.7 ,createdAt: new Date(), updatedAt: new Date() },
        { city: 'Dhaka', month: 'FEB', rainfall: 28.9 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'MAR', rainfall: 65.8 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'APR', rainfall: 156.3 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'MAY', rainfall: 339.4,createdAt: new Date(), updatedAt: new Date() },
        { city: 'Dhaka', month: 'JUN', rainfall: 340.4 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'JUL', rainfall: 373.1 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'AUG', rainfall: 316.5 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'SEP', rainfall: 300.4 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'OCT', rainfall: 172.3 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'NOV', rainfall: 34.4 ,createdAt: new Date(), updatedAt: new Date()},
        { city: 'Dhaka', month: 'DEC', rainfall: 12.8 ,createdAt: new Date(), updatedAt: new Date()},


// Mymensingh
{ city: 'Mymensingh', month: 'JAN', rainfall: 10.0 ,createdAt: new Date(), updatedAt: new Date()},
{ city: 'Mymensingh', month: 'FEB', rainfall: 20.5 ,createdAt: new Date(), updatedAt: new Date()},
{ city: 'Mymensingh', month: 'MAR', rainfall: 35.8 ,createdAt: new Date(), updatedAt: new Date()},
{ city: 'Mymensingh', month: 'APR', rainfall: 128.6,createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mymensingh', month: 'MAY', rainfall: 356.9,createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mymensingh', month: 'JUN', rainfall: 394.3 ,createdAt: new Date(), updatedAt: new Date()},
{ city: 'Mymensingh', month: 'JUL', rainfall: 436.3 ,createdAt: new Date(), updatedAt: new Date()},
{ city: 'Mymensingh', month: 'AUG', rainfall: 318.1 ,createdAt: new Date(), updatedAt: new Date()},
{ city: 'Mymensingh', month: 'SEP', rainfall: 335.3,createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mymensingh', month: 'OCT', rainfall: 190.9 ,createdAt: new Date(), updatedAt: new Date()},
{ city: 'Mymensingh', month: 'NOV', rainfall: 17.5,createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mymensingh', month: 'DEC', rainfall: 8.7 ,createdAt: new Date(), updatedAt: new Date()},


// Tangail
{ city: 'Tangail', month: 'JAN', rainfall: 9.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'FEB', rainfall: 33.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'MAR', rainfall: 33.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'APR', rainfall: 151.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'MAY', rainfall: 258.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'JUN', rainfall: 311.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'JUL', rainfall: 345.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'AUG', rainfall: 253.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'SEP', rainfall: 298.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'OCT', rainfall: 139.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'NOV', rainfall: 29.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Tangail', month: 'DEC', rainfall: 12.1, createdAt: new Date(), updatedAt: new Date() },


// Faridpur
{ city: 'Faridpur', month: 'JAN', rainfall: 7.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'FEB', rainfall: 27.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'MAR', rainfall: 51.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'APR', rainfall: 142.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'MAY', rainfall: 267.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'JUN', rainfall: 345.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'JUL', rainfall: 339.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'AUG', rainfall: 308.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'SEP', rainfall: 264.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'OCT', rainfall: 156.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'NOV', rainfall: 31.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Faridpur', month: 'DEC', rainfall: 11.3, createdAt: new Date(), updatedAt: new Date() },

// Madaripur
{ city: 'Madaripur', month: 'JAN', rainfall: 9.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'FEB', rainfall: 34.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'MAR', rainfall: 60.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'APR', rainfall: 154.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'MAY', rainfall: 264.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'JUN', rainfall: 384.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'JUL', rainfall: 401.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'AUG', rainfall: 351.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'SEP', rainfall: 246.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'OCT', rainfall: 149.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'NOV', rainfall: 32.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Madaripur', month: 'DEC', rainfall: 5.4, createdAt: new Date(), updatedAt: new Date() },

// Chittagong
{ city: 'Chittagong', month: 'JAN', rainfall: 5.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'FEB', rainfall: 24.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'MAR', rainfall: 54.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'APR', rainfall: 147.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'MAY', rainfall: 298.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'JUN', rainfall: 607.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'JUL', rainfall: 727.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'AUG', rainfall: 530.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'SEP', rainfall: 259.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'OCT', rainfall: 184.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'NOV', rainfall: 67.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chittagong', month: 'DEC', rainfall: 11.9, createdAt: new Date(), updatedAt: new Date() },


// Sandwip
{ city: 'Sandwip', month: 'JAN', rainfall: 10.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'FEB', rainfall: 27.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'MAR', rainfall: 62.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'APR', rainfall: 165.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'MAY', rainfall: 340.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'JUN', rainfall: 652.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'JUL', rainfall: 835.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'AUG', rainfall: 695.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'SEP', rainfall: 395.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'OCT', rainfall: 219.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'NOV', rainfall: 64.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sandwip', month: 'DEC', rainfall: 9.4, createdAt: new Date(), updatedAt: new Date() },

// Sitakunda
{ city: 'Sitakunda', month: 'JAN', rainfall: 5.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'FEB', rainfall: 19.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'MAR', rainfall: 91.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'APR', rainfall: 184.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'MAY', rainfall: 351.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'JUN', rainfall: 548.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'JUL', rainfall: 726.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'AUG', rainfall: 545.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'SEP', rainfall: 316.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'OCT', rainfall: 240.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'NOV', rainfall: 54.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sitakunda', month: 'DEC', rainfall: 7.9, createdAt: new Date(), updatedAt: new Date() },

// Ranganati
{ city: 'Ranganati', month: 'JAN', rainfall: 5.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'FEB', rainfall: 24.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'MAR', rainfall: 62.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'APR', rainfall: 147.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'MAY', rainfall: 319.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'JUN', rainfall: 504.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'JUL', rainfall: 572.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'AUG', rainfall: 435.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'SEP', rainfall: 259.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'OCT', rainfall: 152.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'NOV', rainfall: 55.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ranganati', month: 'DEC', rainfall: 9.5, createdAt: new Date(), updatedAt: new Date() },

// Comilla
{ city: 'Comilla', month: 'JAN', rainfall: 7.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'FEB', rainfall: 28.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'MAR', rainfall: 66.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'APR', rainfall: 153.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'MAY', rainfall: 329.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'JUN', rainfall: 329.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'JUL', rainfall: 415.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'AUG', rainfall: 316.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'SEP', rainfall: 226.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'OCT', rainfall: 141.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'NOV', rainfall: 41.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Comilla', month: 'DEC', rainfall: 8.6, createdAt: new Date(), updatedAt: new Date() },

// Feni
{ city: 'Feni', month: 'JAN', rainfall: 8.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'FEB', rainfall: 35.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'MAR', rainfall: 76.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'APR', rainfall: 192.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'MAY', rainfall: 383.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'JUN', rainfall: 529.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'JUL', rainfall: 731.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'AUG', rainfall: 536.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'SEP', rainfall: 324.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'OCT', rainfall: 200.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'NOV', rainfall: 52.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Feni', month: 'DEC', rainfall: 9.9, createdAt: new Date(), updatedAt: new Date() },

// Hatiya
{ city: 'Hatiya', month: 'JAN', rainfall: 6.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'FEB', rainfall: 22.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'MAR', rainfall: 62.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'APR', rainfall: 140.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'MAY', rainfall: 300.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'JUN', rainfall: 572.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'JUL', rainfall: 698.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'AUG', rainfall: 566.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'SEP', rainfall: 385.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'OCT', rainfall: 211.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'NOV', rainfall: 63.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Hatiya', month: 'DEC', rainfall: 12.3, createdAt: new Date(), updatedAt: new Date() },

// Cox's Bazar
{ city: "Cox's Bazar", month: 'JAN', rainfall: 4.1, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'FEB', rainfall: 17.0, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'MAR', rainfall: 34.7, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'APR', rainfall: 121.8, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'MAY', rainfall: 286.8, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'JUN', rainfall: 801.9, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'JUL', rainfall: 924.6, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'AUG', rainfall: 667.1, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'SEP', rainfall: 330.1, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'OCT', rainfall: 213.6, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'NOV', rainfall: 109.4, createdAt: new Date(), updatedAt: new Date() },
{ city: "Cox's Bazar", month: 'DEC', rainfall: 13.0, createdAt: new Date(), updatedAt: new Date() },

// Kutubdia
{ city: 'Kutubdia', month: 'JAN', rainfall: 6.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'FEB', rainfall: 24.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'MAR', rainfall: 51.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'APR', rainfall: 85.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'MAY', rainfall: 215.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'JUN', rainfall: 638.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'JUL', rainfall: 763.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'AUG', rainfall: 488.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'SEP', rainfall: 299.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'OCT', rainfall: 169.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'NOV', rainfall: 71.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Kutubdia', month: 'DEC', rainfall: 9.3, createdAt: new Date(), updatedAt: new Date() },

// Teknaf
{ city: 'Teknaf', month: 'JAN', rainfall: 1.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'FEB', rainfall: 16.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'MAR', rainfall: 15.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'APR', rainfall: 73.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'MAY', rainfall: 259.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'JUN', rainfall: 968.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'JUL', rainfall: 1029.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'AUG', rainfall: 898.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'SEP', rainfall: 402.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'OCT', rainfall: 207.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'NOV', rainfall: 75.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Teknaf', month: 'DEC', rainfall: 5.9, createdAt: new Date(), updatedAt: new Date() },

// Sylhet
{ city: 'Sylhet', month: 'JAN', rainfall: 9.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'FEB', rainfall: 36.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'MAR', rainfall: 155.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'APR', rainfall: 375.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'MAY', rainfall: 569.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'JUN', rainfall: 818.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'JUL', rainfall: 819.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'AUG', rainfall: 612.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'SEP', rainfall: 535.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'OCT', rainfall: 223.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'NOV', rainfall: 30.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sylhet', month: 'DEC', rainfall: 9.4, createdAt: new Date(), updatedAt: new Date() },

// Srimangal
{ city: 'Srimangal', month: 'JAN', rainfall: 5.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'FEB', rainfall: 31.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'MAR', rainfall: 84.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'APR', rainfall: 216.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'MAY', rainfall: 449.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'JUN', rainfall: 449.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'JUL', rainfall: 339.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'AUG', rainfall: 299.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'SEP', rainfall: 278.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'OCT', rainfall: 150.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'NOV', rainfall: 40.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Srimangal', month: 'DEC', rainfall: 11.2, createdAt: new Date(), updatedAt: new Date() },

// Rajshahi
{ city: 'Rajshahi', month: 'JAN', rainfall: 11.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'FEB', rainfall: 17.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'MAR', rainfall: 24.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'APR', rainfall: 63.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'MAY', rainfall: 136.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'JUN', rainfall: 264.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'JUL', rainfall: 320.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'AUG', rainfall: 273.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'SEP', rainfall: 295.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'OCT', rainfall: 106.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'NOV', rainfall: 16.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rajshahi', month: 'DEC', rainfall: 10.6, createdAt: new Date(), updatedAt: new Date() },

// Ishurdi
{ city: 'Ishurdi', month: 'JAN', rainfall: 8.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'FEB', rainfall: 21.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'MAR', rainfall: 30.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'APR', rainfall: 95.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'MAY', rainfall: 206.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'JUN', rainfall: 288.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'JUL', rainfall: 335.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'AUG', rainfall: 261.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'SEP', rainfall: 282.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'OCT', rainfall: 98.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'NOV', rainfall: 17.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Ishurdi', month: 'DEC', rainfall: 10.8, createdAt: new Date(), updatedAt: new Date() },

// Bogra
{ city: 'Bogra', month: 'JAN', rainfall: 8.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'FEB', rainfall: 15.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'MAR', rainfall: 20.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'APR', rainfall: 80.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'MAY', rainfall: 222.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'JUN', rainfall: 343.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'JUL', rainfall: 406.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'AUG', rainfall: 285.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'SEP', rainfall: 310.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'OCT', rainfall: 126.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'NOV', rainfall: 13.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bogra', month: 'DEC', rainfall: 11.3, createdAt: new Date(), updatedAt: new Date() },

// Rangpur
{ city: 'Rangpur', month: 'JAN', rainfall: 9.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'FEB', rainfall: 11.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'MAR', rainfall: 24.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'APR', rainfall: 104.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'MAY', rainfall: 294.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'JUN', rainfall: 417.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'JUL', rainfall: 464.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'AUG', rainfall: 376.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'SEP', rainfall: 383.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'OCT', rainfall: 132.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'NOV', rainfall: 10.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Rangpur', month: 'DEC', rainfall: 7.9, createdAt: new Date(), updatedAt: new Date() },

// Dinajpur
{ city: 'Dinajpur', month: 'JAN', rainfall: 12.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'FEB', rainfall: 10.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'MAR', rainfall: 11.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'APR', rainfall: 67.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'MAY', rainfall: 232.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'JUN', rainfall: 335.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'JUL', rainfall: 433.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'AUG', rainfall: 387.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'SEP', rainfall: 383.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'OCT', rainfall: 115.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'NOV', rainfall: 7.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Dinajpur', month: 'DEC', rainfall: 10.2, createdAt: new Date(), updatedAt: new Date() },

// Sayedpur
{ city: 'Sayedpur', month: 'JAN', rainfall: 12.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'FEB', rainfall: 6.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'MAR', rainfall: 22.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'APR', rainfall: 94.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'MAY', rainfall: 221.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'JUN', rainfall: 435.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'JUL', rainfall: 350.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'AUG', rainfall: 350.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'SEP', rainfall: 456.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'OCT', rainfall: 139.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'NOV', rainfall: 11.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Sayedpur', month: 'DEC', rainfall: 6.7, createdAt: new Date(), updatedAt: new Date() },

// Khulna
{ city: 'Khulna', month: 'JAN', rainfall: 13.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'FEB', rainfall: 44.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'MAR', rainfall: 52.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'APR', rainfall: 87.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'MAY', rainfall: 200.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'JUN', rainfall: 335.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'JUL', rainfall: 329.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'AUG', rainfall: 323.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'SEP', rainfall: 254.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'OCT', rainfall: 129.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'NOV', rainfall: 32.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khulna', month: 'DEC', rainfall: 6.6, createdAt: new Date(), updatedAt: new Date() },

// Mongla
{ city: 'Mongla', month: 'JAN', rainfall: 16.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'FEB', rainfall: 35.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'MAR', rainfall: 58.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'APR', rainfall: 72.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'MAY', rainfall: 180.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'JUN', rainfall: 323.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'JUL', rainfall: 342.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'AUG', rainfall: 344.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'SEP', rainfall: 313.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'OCT', rainfall: 149.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'NOV', rainfall: 48.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Mongla', month: 'DEC', rainfall: 1.6, createdAt: new Date(), updatedAt: new Date() },

// Satkhira
{ city: 'Satkhira', month: 'JAN', rainfall: 13.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'FEB', rainfall: 40.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'MAR', rainfall: 37.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'APR', rainfall: 86.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'MAY', rainfall: 152.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'JUN', rainfall: 296.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'JUL', rainfall: 375.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'AUG', rainfall: 297.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'SEP', rainfall: 280.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'OCT', rainfall: 120.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'NOV', rainfall: 31.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Satkhira', month: 'DEC', rainfall: 11.4, createdAt: new Date(), updatedAt: new Date() },

// Jessore
{ city: 'Jessore', month: 'JAN', rainfall: 14.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'FEB', rainfall: 26.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'MAR', rainfall: 44.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'APR', rainfall: 75.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'MAY', rainfall: 169.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'JUN', rainfall: 298.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'JUL', rainfall: 304.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'AUG', rainfall: 291.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'SEP', rainfall: 236.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'OCT', rainfall: 107.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'NOV', rainfall: 29.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Jessore', month: 'DEC', rainfall: 15.8, createdAt: new Date(), updatedAt: new Date() },

// Chuadanga
{ city: 'Chuadanga', month: 'JAN', rainfall: 14.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'FEB', rainfall: 26.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'MAR', rainfall: 20.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'APR', rainfall: 39.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'MAY', rainfall: 142.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'JUN', rainfall: 235.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'JUL', rainfall: 351.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'AUG', rainfall: 232.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'SEP', rainfall: 297.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'OCT', rainfall: 101.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'NOV', rainfall: 21.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Chuadanga', month: 'DEC', rainfall: 13.0, createdAt: new Date(), updatedAt: new Date() },

// Barisal
{ city: 'Barisal', month: 'JAN', rainfall: 8.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'FEB', rainfall: 27.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'MAR', rainfall: 57.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'APR', rainfall: 132.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'MAY', rainfall: 232.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'JUN', rainfall: 408.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'JUL', rainfall: 407.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'AUG', rainfall: 371.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'SEP', rainfall: 259.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'OCT', rainfall: 158.6, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'NOV', rainfall: 52.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Barisal', month: 'DEC', rainfall: 12.6, createdAt: new Date(), updatedAt: new Date() },

// Patuakhali
{ city: 'Patuakhali', month: 'JAN', rainfall: 9.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'FEB', rainfall: 24.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'MAR', rainfall: 41.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'APR', rainfall: 132.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'MAY', rainfall: 276.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'JUN', rainfall: 547.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'JUL', rainfall: 572.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'AUG', rainfall: 484.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'SEP', rainfall: 380.8, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'OCT', rainfall: 163.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'NOV', rainfall: 71.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Patuakhali', month: 'DEC', rainfall: 7.3, createdAt: new Date(), updatedAt: new Date() },

// Khepupara
{ city: 'Khepupara', month: 'JAN', rainfall: 6.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'FEB', rainfall: 24.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'MAR', rainfall: 50.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'APR', rainfall: 132.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'MAY', rainfall: 258.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'JUN', rainfall: 510.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'JUL', rainfall: 650.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'AUG', rainfall: 479.9, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'SEP', rainfall: 357.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'OCT', rainfall: 228.1, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'NOV', rainfall: 58.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Khepupara', month: 'DEC', rainfall: 7.2, createdAt: new Date(), updatedAt: new Date() },

// Bhola
{ city: 'Bhola', month: 'JAN', rainfall: 10.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'FEB', rainfall: 32.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'MAR', rainfall: 63.4, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'APR', rainfall: 129.7, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'MAY', rainfall: 274.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'JUN', rainfall: 465.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'JUL', rainfall: 444.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'AUG', rainfall: 395.5, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'SEP', rainfall: 264.2, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'OCT', rainfall: 155.3, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'NOV', rainfall: 52.0, createdAt: new Date(), updatedAt: new Date() },
{ city: 'Bhola', month: 'DEC', rainfall: 10.6, createdAt: new Date(), updatedAt: new Date() },



    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed here.
    // Example:
    await queryInterface.bulkDelete('rainFalls', null, {});
  }
};







