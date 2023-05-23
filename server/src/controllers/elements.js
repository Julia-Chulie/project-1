import Query from "../model/query.js";

export const allElements = async (req, res) => {
  try {
    const query =
      "SELECT element.id, element.content, type.name FROM element JOIN type ON element.type_id = type.id";
    const result = await Query.find(query);
    if (result.length > 2) {
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

export const oneElement = async (req, res) => {
  try {
    const query =
      "SELECT element.id, element.content, type.name FROM element JOIN type ON element.type_id = type.id WHERE element.id = ?";
    const result = await Query.findByValue(query, req.params.id);
    if (result.length>2) {
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

export const createElement = async (req, res) => {
  try {
    const query =
      "INSERT INTO element (content, type_id, isDefault) VALUES (?,?,0)";
    const result = await Query.write(query, [
      req.body.content,
      req.body.type_id,
    ]);
    const msg = "Element created successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};

export const updateElement = async (req, res) => {
  try {
    const query = "UPDATE element SET content = ?, type_id = ? WHERE id = ?";
    const queryResult = [req.body.content, req.body.type_id];
    const result = await Query.write(query, queryResult);
    const msg = "Element updates successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};

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
