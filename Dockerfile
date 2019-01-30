FROM python:3.6-alpine

RUN pip install flask_restful
RUN pip install flask_cors
COPY app.py fauxdb.json /app/
COPY static /app/static
WORKDIR /app

EXPOSE 8088

ENTRYPOINT ["python"]
CMD ["app.py","--port","8088","--debug","fauxdb.json"]
