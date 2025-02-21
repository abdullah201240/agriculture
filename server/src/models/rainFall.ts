import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/sequelize'; // Adjust path as needed

// Define the attributes for the User model
interface RainFallAttributes {
  id: number;
  city: string;
  month: string
  rainfall: string
 
}

interface RainFallCreationAttributes extends Optional<RainFallAttributes, 'id'> {}

// Define the User model class
class RainFall extends Model<RainFallAttributes, RainFallCreationAttributes> implements RainFallAttributes {
  public id!: number;
  public city!: string;
  public month!: string;
  public rainfall!: string;

  
  }

  RainFall.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      month: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rainfall: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
    },
    {
      sequelize: db, // Use the passed `sequelizeInstance`
      modelName: 'RainFall',
      tableName: 'rainFalls', // Specify table name if different from model name
      timestamps: true, // Enable `createdAt` and `updatedAt`
    }
  );

  

export default RainFall;
