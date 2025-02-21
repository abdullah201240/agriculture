import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/sequelize'; // Adjust path as needed

// Define the attributes for the User model
interface LandAttributes {
  id: number;
  landName: string;
  userId: string
 
}

interface LandCreationAttributes extends Optional<LandAttributes, 'id'> {}

// Define the User model class
class Land extends Model<LandAttributes, LandCreationAttributes> implements LandAttributes {
  public id!: number;
  public landName!: string;
  public userId!: string;

  
  }

  Land.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      landName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      
    },
    {
      sequelize: db, // Use the passed `sequelizeInstance`
      modelName: 'Land',
      tableName: 'land', // Specify table name if different from model name
      timestamps: true, // Enable `createdAt` and `updatedAt`
    }
  );

  

export default Land;
