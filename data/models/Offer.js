import DataType from "sequelize";
import Model from  '../sequelize';


const Offer = Model.define('Offer', {

  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  slug: {
    type: DataType.TEXT
  },

  name: {
    type: DataType.TEXT
  },

  priceHourly: {
    type: DataType.REAL
  },

  priceDaily: {
    type: DataType.REAL
  },

  priceWeekly: {
    type: DataType.REAL
  }

});

export default Offer;
