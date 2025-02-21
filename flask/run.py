from flask import Flask, request, jsonify
import torch
from ultralytics import YOLO
from PIL import Image
import io
import pandas as pd
import joblib

app = Flask(__name__)

# Set device to MPS (Apple GPU acceleration)
device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")

# Load the trained YOLO model
yolo_model = YOLO('best.pt')  # Update the path
yolo_model.to(device)

# Load the saved Random Forest crop recommendation model
crop_model_file = 'random_forest_model.pkl'  # Update the path if needed
crop_model = joblib.load(crop_model_file)

@app.route('/predict_crop', methods=['POST'])
def predict_crop():
    """
    Predict the recommended crop based on soil and environmental conditions.
    Expects JSON input with keys: N, P, K, temperature, humidity, ph, rainfall
    """
    data = request.get_json()

    expected_features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']

    if not all(k in data for k in expected_features):
        return jsonify({'error': 'Missing required input parameters'}), 400

    # Ensure the input data is structured correctly
    input_data = pd.DataFrame([[data[k] for k in expected_features]], columns=expected_features)

    try:
        # Make prediction
        prediction = crop_model.predict(input_data)
        return jsonify({'recommended_crop': prediction[0]})
    except Exception as e:
        return jsonify({'error': f'Prediction failed: {str(e)}'}), 500


@app.route('/predict_image', methods=['POST'])
def predict_image():
    """
    Predict the class of an image using YOLO model.
    Expects an image file in the request.
    """
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    file = request.files['image']
    image = Image.open(io.BytesIO(file.read()))

    # Perform inference
    results = yolo_model(image)

    # Get the predicted class name
    predicted_class = results[0].names[results[0].probs.top1]

    return jsonify({'predicted_class': predicted_class})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
