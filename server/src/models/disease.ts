import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/sequelize'; // Adjust path as needed

// Define the attributes for the User model
interface DiseaseAttributes {
  id: number;
  image: string;
  predicted_class: string
  userId: string
 
}

interface DiseaseCreationAttributes extends Optional<DiseaseAttributes, 'id'> {}

// Define the User model class
class Disease extends Model<DiseaseAttributes, DiseaseCreationAttributes> implements DiseaseAttributes {
  public id!: number;
  public image!: string;
  public predicted_class!: string;
  public userId!: string;

  
  }

  Disease.init(
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
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      predicted_class: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
    },
    {
      sequelize: db, // Use the passed `sequelizeInstance`
      modelName: 'Disease',
      tableName: 'disease', // Specify table name if different from model name
      timestamps: true, // Enable `createdAt` and `updatedAt`
    }
  );

  

export default Disease;
