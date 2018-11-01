'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    prov_code: DataTypes.STRING,
    city_name: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    foreignKey: 'prov_code',
    targetKey: 'prov_code'
  };
  return City;
};
