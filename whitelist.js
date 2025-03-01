/*******************************************************/
/*                Whitelist Data                       */
/* This array is hidden from the UI but can be seen via  */
/* browser developer tools. Modify as necessary.       */
/*******************************************************/
const WHITELIST_DATA = [
  "0x1234567890abcdef1234567890abcdef12345678",
  "0xabcdefabcdefabcdefabcdefabcdefabcdef1234",
  "0x0987654321abcdef0987654321abcdef09876543",
  "0x85a65d734455ca35b2c1bd160d822a8655ed94f7",
  "0x38c19fd089b46568f473b8fccbfddd3e060df45d",
  "F56Jjdj5CW5Kad2v1C1iwiifeAjDVAymwhRxzyj5XpFL",
  "0xfd679f4a9c03ddba1143fe816d2fb9b247768767",
  "0xb6b3d24d6bf244387a2d0bd439a7793d5ae6c45e",
  "0x142ee9a343b035b73f5403b6ed79d9b78e717382"
];

// Ensure the global variable 'whitelist' is set.
if (typeof whitelist !== "undefined") {
  whitelist = WHITELIST_DATA;
} else {
  window.whitelist = WHITELIST_DATA;
}
