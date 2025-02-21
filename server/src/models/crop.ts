import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/sequelize'; // Adjust path as needed

// Define the attributes for the User model
interface CropAttributes {
    id: number;
    landId: number;
    landName: string;
    userId: number;
    position: string;
    date: string;
    pH: number;
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    temperature: number;
    humidity: number;
    rainfall: number;
    prediction: string;
 
}

interface CropCreationAttributes extends Optional<CropAttributes, 'id'> {}

// Define the User model class
class Crop extends Model<CropAttributes,CropCreationAttributes> implements CropAttributes {
    public id!: number;
    public landId!: number;
    public landName!: string;
    public userId!: number;
    public position!: string;
    public date!: string;
    public pH!: number;
    public nitrogen!: number;
    public phosphorus!: number;
    public potassium!: number;
    public temperature!: number;
    public humidity!: number;
    public rainfall!: number;
    public prediction!: string;

  
  }

  Crop.init(
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        landId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'land', key: 'id' },
        },
        landName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        position: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        date: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        pH: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        nitrogen: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        phosphorus: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        potassium: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        temperature: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        humidity: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        rainfall: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        prediction: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
    {
      sequelize: db, // Use the passed `sequelizeInstance`
      modelName: 'Crop',
      tableName: 'crops', // Specify table name if different from model name
      timestamps: true, // Enable `createdAt` and `updatedAt`
    }
  );

  

export default Crop;
