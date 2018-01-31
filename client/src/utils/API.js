import axios from "axios";

export default {
  // Gets all books
  getBoxes: function() {
    return axios.get("/api/boxes");
  },
  // Gets the box with the given id
  getBox: function(id) {
    return axios.get("/api/boxes/" + id);
  },
  // Deletes the box with the given id
  deleteBox: function(id) {
    return axios.delete("/api/boxes/" + id);
  },
  // Saves a box to the database
  saveBox: function(boxData) {
    return axios.post("/api/boxes", boxData);
  },

    // Gets all items
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the box with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the box with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a box to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};
