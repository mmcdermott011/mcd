# Base Image
FROM python:3.7.6

# create and set working directory
#RUN mkdir /app
WORKDIR /mcd

## Add current directory code to working directory
#ADD . /mcd/
COPY requirements.txt /mcd/requirements.txt

# set default environment variables
ENV PYTHONUNBUFFERED 1
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND=noninteractive 

# set project environment variables
# grab these via Python's os.environ
# these are 100% optional here
#ENV PORT=8000

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
        tzdata \
        python3-setuptools \
        python3-pip \
        python3-dev \
        python3-venv \
        git \
        && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


# install environment dependencies
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
# Install project dependencies
#RUN pipenv install --skip-lock --system --dev

# copy project
COPY . .

## add and run as non-root user
#RUN adduser myuser
#USER myuser

#EXPOSE $PORT
#CMD python3 ./mcd_web_portfolio/manage.py runserver 0.0.0.0:$PORT
CMD cd mcd_web_portfolio/
WORKDIR /mcd/mcd_web_portfolio
CMD python3 ./mcd_web_portfolio/manage.py collectstatic
CMD gunicorn mcd_web_portfolio.wsgi:application --bind 0.0.0.0:$PORT