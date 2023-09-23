import {
  createMasterProductionQtyModels,
  deleteMasterProductionQtyModels,
} from "../model/master_prod_qty.js";

export const createProductionQty = async (req, res) => {
  try {
    await createMasterProductionQtyModels(req.data);
    res.status(200).json({
      msg: "create data success",
      data: req.data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "create data failed",
      errMsg: error,
    });
  }
};

export const deleteProductionQty = async (req, res) => {
  try {
    await deleteMasterProductionQtyModels(req.params.id);
    res.status(200).json({
      msg: "delete data success",
      data: req.params.id,
    });
  } catch (error) {
    res.status(400).json({
      msg: "delete data failed",
      errMsg: error,
    });
  }
};
