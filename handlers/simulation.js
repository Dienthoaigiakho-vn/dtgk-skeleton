const simulation = async (req, res, { credify }) => {
  // call credify core to get simulation configuration
  try {
    const productType = req.body.productType;
    const providerIds = req.body.providerIds || [
      "09de7359-7f29-41a0-bd07-095d1ce7f85d",
    ];
    let inputs = req.body.inputs;
    inputs = {
      ...inputs,
      product: {
        manufacturer: "test",
        category: "ahihi",
        name: "hehe",
      },
    };
    const response = await credify.offer.simulate(
      productType,
      providerIds,
      inputs
    );

    return res.status(200).json({ success: true, data: response.list });
  } catch (error) {
      return res.status(500).json({ message: error.message })
  }
};

module.exports = simulation;
