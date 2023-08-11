const salt = () => {
  // get the current hour
  const hour = new Date().getHours();
  // a phrase
  const phrase = "Calling dr. franz chucrute, calling dr. franz chucrute";
  // concat the hour and the phrase
  const salt = `${hour}${phrase}`;
  // return the salt
  return salt;
};

export const DEV_ROOM = {
  password: "McClain",
  salt: salt(),
};
