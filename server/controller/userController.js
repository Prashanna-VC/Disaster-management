const userModel = require("../schema/userSchema");

exports.createDisaster = async (req, res) => {
  try {
    const { Disaster_name, Disaster_location, Disaster_detail } = req.body;
    const existDisaster = await userModel.findOne({ Disaster_name });
    if (!existDisaster) {
      const newDisaster = await userModel.create({
        Disaster_name,
        Disaster_location,
        Disaster_detail,
      });
      return res
        .status(201)
        .json({ message: "Disaster create succesfully", data: newDisaster });
    } else {
      return res
        .status(400)
        .json({ message: "Disaster with this name already exists" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateDisaster = async (req, res) => {
  try {
    const { Disaster_name, Disaster_location, Disaster_detail,Disaster_level } = req.body;
    const editDisaster = await userModel.findOne({ Disaster_name,Disaster_level });
    if (!editDisaster) {
      const upDisaster = await userModel.create({
        Disaster_name,
        Disaster_location,
        Disaster_detail,
        Disaster_level
      });
      return res
        .status(201)
        .json({ message: "Disaster update sucessfully", data:upDisaster });
    } else {
      return res.status(400).json({ message: "Disaster already update" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



exports.deleteDisaster = async (req, res) => {
  try {
    const { Disaster_name, Disaster_location, Disaster_detail,Disaster_level } = req.body;
    const delDisaster = await userModel.findOne({ Disaster_name });
    if (!delDisaster) {
      const deleteDisaster = await userModel.create({
        Disaster_name,
        Disaster_location,
        Disaster_detail,
        Disaster_level
        
      });
      return res
        .status(201)
        .json({ message: "Deleted sucessfully", data: deleteDisaster });
    } else {
      return res.status(400).json({ message: "details already deleted" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



