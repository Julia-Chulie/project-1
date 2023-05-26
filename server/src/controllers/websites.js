import Query from "../model/query.js";

//Get all the websites @GET
//ROUTE /website
export const allWebsites = async (req, res) => {
  try {
    const query = "SELECT * from website";
    const result = await Query.find(query);
    if (!result.length) {
      const msg = "All websites found successfully";
      res.status(200).json({ msg, result });
    } else {
      const msg = "No website yet";
      res.status(200).json(msg);
    }
  } catch (err) {
    throw Error(err);
  }
};

//Get a website by id @GET
//ROUTE /website/:id
export const oneWebsite = async (req, res) => {
  try {
    const query = "SELECT * from website WHERE id = ? ";
    const result = await Query.findByValue(query, req.params.id);

    if (result.length) {
      const msg = "Website found successfully";
      res.status(200).json({ msg, result });
    } else {
      const msg = "This website doesn't exist";
      res.status(200).json(msg);
    }
  } catch (err) {
    throw Error(err);
  }
};

//Create a website @POST
//ROUTE /website
export const createWebsite = async (req, res) => {
  try {
    const query =
      "INSERT INTO website (user_id, title, description, icon, url) VALUES (?,?,?,?,?)";
    const result = await Query.write(query, [
      req.body.user_id,
      req.body.title,
      req.body.description,
      req.body.icon,
      req.body.url,
    ]);
    const msg = "Website created successfully";
    res.status(200).json({ msg, result });
  } catch (err) {
    throw Error(err);
  }
};

//Update a website @PUT
//ROUTE /website/:id
export const updateWebsite = async (req, res) => {
  try {
    const query =
      "UPDATE website SET user_id = ?, title = ?, description = ?, icon = ?, url = ? WHERE id = ?";
    const queryParams = [
      req.body.user_id,
      req.body.title,
      req.body.description,
      req.body.icon,
      req.body.url,
      req.params.id,
    ];
    const result = await Query.write(query, queryParams);
    const msg = "Website updated successfully";
    res.status(200).json({ msg, result });
  } catch (err) {
    throw Error(err);
  }
};

//Delete a website @DELETE
//ROUTE /website/:id
export const deleteWebsite = async (req, res) => {
  try {
    const query = "DELETE FROM website WHERE id = ?";
    const result = await Query.write(query, [req.params.id]);
    const msg = "Website deleted successfully";
    res.status(200).json({ msg, result });
  } catch (err) {
    throw Error(err);
  }
};