# Start with the python:3.9 image
FROM python:3.10.5
# Set the following enviroment variables
#
ENV REACT_APP_BASE_URL=https://seafall.herokuapp.com \
    FLASK_APP=app \
    FLASK_ENV=production \
    SQLALCHEMY_ECHO=true

# Set the directory for upcoming commands to /var/www

WORKDIR /var/www

# Copy all the files from your repo to the working directory

COPY . .

# Copy the built react app (it's built for us) from the  
# /react-app/build/ directory into your flasks app/static directory

COPY /react-app/build/ app/static

# Run the next two python install commands with PIP
RUN pip install -r requirements.txt && \
    pip install psycopg2

# Start the flask environment by setting our
# closing command to gunicorn app:app

CMD ["gunicorn", "app:app"]
