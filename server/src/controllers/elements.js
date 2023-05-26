import Query from "../model/query.js";

//Get all elements @GET
//ROUTE /element
export const allElements = async (req, res) => {
  try {
    const query =
      "SELECT element.id, element.content FROM element";
    const result = await Query.find(query);
    if (result.length) {
      const msg = "Elements found successfully";
      res.status(200).json({ msg, result });
    } else {
      const msg = "No element yet";
      res.status(200).json(msg);
    }
  } catch (error) {
    throw Error(error);
  }
};

//Get an element by id @GET
//ROUTE /element/:id
export const oneElement = async (req, res) => {
  try {
    const query =
      "SELECT element.id, element.content, element_type.name FROM element JOIN type ON element.element_type_id = element_type.id WHERE element.id = ?";
    const result = await Query.findByValue(query, req.params.id);

    if (result.length > 2) {
      const msg = "Element found succcessfully";
      res.status(200).json({ msg, result });
    } else {
      const msg = "Element doesn't exist";
      res.status(200).json(msg);
    }
  } catch (error) {
    throw Error(error);
  }
};

//Create an element @POST
//ROUTE : /element
export const createElement = async (req, res) => {
  try {
    const query =
      "INSERT INTO element (content, element_type_id, isDefault) VALUES (?,?,0)";
    const result = await Query.write(query, [
      req.body.content,
      req.body.element_type_id,
    ]);
    const msg = "Element created successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};

//Update an element @PUT
//ROUTE /element/:id
export const updateElement = async (req, res) => {
  try {
    const query =
      "UPDATE element SET content = ?, element_type_id = ? WHERE id = ?";
    const queryParams = [
      req.body.content,
      req.body.element_type_id,
      req.params.id,
    ];
    const result = await Query.write(query, queryParams);
    const msg = "Element updated successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};

//Delete an element @DELETE
//ROUTE /element/:id
export const deleteElement = async (req, res) => {
  try {
    const query = "DELETE FROM element WHERE id = ?";
    const result = await Query.write(query, req.params.id);
    const msg = "Element deleted successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};

//Create a type @POST
//ROUTE /element/addType
export const createElementType = async (req, res) => {
  try {
    const query = " INSERT INTO element_type (name) VALUES (?)";
    const result = await Query.write(query, req.body.name);
    const msg = "Type created successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};