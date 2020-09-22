const hbs = require("hbs");
const dayjs = require("dayjs");

hbs.registerHelper("isSameId", function (value1, value2, options) {
  if (value1.toString() === value2.toString()) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("formatDateInput", function (date) {
  return dayjs(date).format("YYYY-MM-DD");
});
