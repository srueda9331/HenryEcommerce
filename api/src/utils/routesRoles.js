const authRoute = (routeRoles, myRole) => {
  const allow = routeRoles.find((role) => role === myRole);

  if (allow) return true;
  return false;
};

const productRoles = ["admin"];
const newsletterRoles = ["admin"];
const usersRoles = ["admin"];

module.exports = {
  authRoute,
  productRoles,
  newsletterRoles,
  usersRoles,
};
