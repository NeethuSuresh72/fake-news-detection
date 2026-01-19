# fake-news-detection
📰 Fake News Detection System using Machine Learning & NLP:

📖 Overview:
The Fake News Detection System is a machine learning–based web application designed to identify whether a given news article is Real or Fake. With the rapid growth of digital media and social networking platforms, misinformation spreads quickly and can cause serious social, political, and economic consequences. This system aims to provide an automated, efficient, and reliable solution for detecting fake news using Natural Language Processing (NLP) techniques.
The project consists of three major components:
1.Model Training Module
2.Backend API
3.Frontend Web Interface

Problem Statement:
The widespread availability of online news has made it difficult to distinguish between genuine and fake information. Manual fact-checking is time-consuming, error-prone, and not scalable. There is a need for an automated system that can analyze news content and accurately classify it as real or fake using machine learning techniques.

Proposed Solution:
This project proposes a Fake News Detection System that analyzes the textual content of news articles using NLP and machine learning algorithms. The system is trained on labeled datasets containing real and fake news. Once trained, the model is exposed as a REST API using Flask. A web-based frontend allows users to input news content and receive predictions along with confidence scores in real time.

System Architecture:
1.User Interface (Frontend)
   -Allows users to input news text
   -Displays prediction and confidence score
2.Backend (Flask API)
   -Receives input from frontend
   -Preprocesses text
   -Sends text to trained ML model
   -Returns prediction and confidence
3.Machine Learning Model
   -Trained using NLP techniques
   -Uses TF-IDF / Transformer-based representations
   -Outputs classification result

Technologies Used:
1.Programming & Frameworks
   -Python
   -Flask (Backend API)
   -HTML, CSS, JavaScript (Frontend)
2.Machine Learning & NLP
   -scikit-learn
   -Hugging Face Transformers (optional)
   -TF-IDF Vectorization
3.Tools & Platforms
   -Google Colab (Model Training)
   -Git & GitHub (Version Control)
   -Git LFS (Large Model Files)

Project Structure:
fake-news-detection/
│
├── training/
│   └── fake_news_training.ipynb
│
├── backend/
│   ├── app.py
│   ├── model files (tracked using Git LFS)
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md


Dataset Used:
Fake and Real News Dataset (Kaggle)
https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news
The dataset contains labeled news articles categorized as Real or Fake, which are used for training and evaluating the model.

Model Training:
The model training process is implemented in a Jupyter Notebook located in the training/ folder.
The notebook includes:
  -Data loading
  -Text preprocessing
  -Feature extraction
  -Model training
  -Evaluation
Due to GitHub’s file size limitation, trained model files are managed using Git LFS.

How to Run the Project:
1️⃣ Clone the Repository:
  git clone https://github.com/your-username/fake-news-detection.git
  cd fake-news-detection
2️⃣ Backend Setup:
  cd backend
  pip install -r requirements.txt
  python app.py
 The backend will start running on:
  http://127.0.0.1:5000
3️⃣ Frontend:
 Open frontend/index.html in a web browser.

How the System Works
  1.User enters news text in the frontend
  2.The text is sent to the backend via REST API
  3.Text preprocessing is applied
  4.The trained model predicts Real or Fake
  5.Confidence score is calculated
  6.Result is displayed on the frontend

Results:
   The system successfully classifies news articles as Real or Fake with high accuracy. Predictions are accompanied by a confidence percentage and a visual confidence bar, making results easy to understand for users.

Advantages:
  -Automated and fast fake news detection 
  -Reduces human effort in verification
  -Easy-to-use web interface
  -Scalable and extensible architecture

Existing Limitations:
  -Supports only text-based news analysis
  -Accuracy depends on dataset quality
  -Limited understanding of sarcasm and satire

Challenges Faced:
  -Collecting and preprocessing a reliable dataset
  -Training large models with limited resources
  -Integrating ML model with frontend and backend

Future Scope:
  -Multi-language fake news detection
  -Integration with live news APIs
  -Advanced transformer-based models
  -Browser extension for real-time verification
  -Detection of multimedia fake news

References:
  https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news
  https://scikit-learn.org/stable/
  https://huggingface.co/transformers/
  https://flask.palletsprojects.com/
  https://arxiv.org/abs/1812.00315

Author:
Neethu Suresh
