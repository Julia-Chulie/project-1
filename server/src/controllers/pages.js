import Query from "../model/query.js";

//Get all the pages @GET
//ROUTE /page
export const allPages = async (req, res) => {
  try {
    const query = "SELECT * from page";
    const pages = await Query.find(query);
    if (!pages.length) {
      const msg = "All pages found successfully";
      res.status(200).json({ msg, pages });
    } else {
      const msg = "No page yet";
      res.status(200).json(msg);
    }
  } catch (err) {
    throw Error(err);
  }
};

//Get a page by id @GET
//ROUTE /page/:id
export const onePage = async (req, res) => {
  try {
    const query = "SELECT * from page WHERE id = ? ";
    const page = await Query.findByValue(query, req.params.id);

    if (page) {
      const msg = "Page found successfully";
      res.status(200).json({ msg, page });
    } else {
      const msg = "This page doesn't exist";
      res.status(200).json(msg);
    }
  } catch (err) {
    throw Error(err);
  }
};

//Create a page @POST
//ROUTE /page
export const createPage = async (req, res) => {
  try {
    const query =
      "INSERT INTO page (website_id, title, description, slug) VALUES (?,?,?,?)";
    const result = await Query.write(query, [
      req.body.website_id,
      req.body.title,
      req.body.description,
      req.body.slug,
    ]);
    const msg = "Page created successfully";
    res.status(200).json({ msg, result });
  } catch (err) {
    throw Error(err);
  }
};

//Update a page @PUT
//ROUTE /page/:id
export const updatePage = async (req, res) => {
  try {
    const query =
      "UPDATE page SET website_id = ?, title = ?, description = ?, slug = ? WHERE id = ?";
    const queryParams = [
      req.body.website_id,
      req.body.title,
      req.body.description,
      req.body.slug,
      req.params.id,
    ];
    const result = await Query.write(query, queryParams);
    const msg = "Page updated successfully";
    res.status(200).json({ msg, result });
  } catch (err) {
    throw Error(err);
  }
};

//Delete a page @DELETE
//ROUTE /page/:id
export const deletePage = async (req, res) => {
  try {
    const query = "DELETE FROM page WHERE id = ?";
    const result = await Query.write(query, [req.params.id]);
    const msg = "Page deleted successfully";
    res.status(200).json({ msg, result });
  } catch (err) {
    throw Error(err);
  }
};