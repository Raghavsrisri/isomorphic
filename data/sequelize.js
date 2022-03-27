import Sequelize from "sequelize";
const sequelize = new Sequelize("sqlite:database.sqlite", {
  define: { freezeTableName: true },
});
export default sequelize;
