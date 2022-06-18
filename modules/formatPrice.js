var formatter = new Intl.NumberFormat("pt-ao", {
  style: "currency",
  currency: "AOA",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0,
  //maximumFractionDigits: 0,
});

export default formatter;
