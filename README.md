You have 2 options for setting up the server, either 
a docker based, or just python.  The straight python
approach is probably the most straightfoward, but if you
are unfamiliar with python and familiar with docker, the 
docker approach may be the easier one.


# Server Setup (Docker)

1. Install docker and authenticate to docker hub.
2. Build the docker image:
    ```
    > docker build -t mock-restapi:latest .
    ```
3. Run the container:
    ```
    > docker run --name f5000 -d -p 8088:8088 mock-restapi:latest
    ```
4. We want the UI html and any css, js, image, etc files to be served from
   the static directory.  This directory gets copied into the docker image
   when it's built.  To make updates to this directory, you have two choices:
   a. copy the any updated, added, or modified files into the container on 
      an ad-hoc basis:
      ```
      docker cp static/. f5000:/app/static/  
      ```        
   b. or, run with the local version of the directory mounted.  If you do it
      this way, your changes will be reflected in real time (replace 
      [/path/to/yoursrc/static] with the path to your local static directory):    
      ```
      > docker run --name f5000 -d --mount type=bind,source=[/path/to/yoursrc/static],target=/app/static -p 8088:8088 mock-restapi:latest
      ```
   I'd recommend the 2nd option as the easiest development option.
   
4. You will need to stop and remove the container if you want to run with 
   different options.  
    
    To rebuild (from running container):
    ```
    > docker stop f5000
    > docker rm f5000
    > docker build -t mock-restapi:latest .
    ```
5. Test the connection:
    ```
    > curl localhost:8088
    ```

Some simple docker commands to interact with the container:
* To tail the server logs for the running container/server: `docker attach f5000`
* To stop the container/server: `docker stop f5000`
* To restart stopped container/server: `docker start f5000` 
* To clean up stopped container: `docker rm f5000` 
* To get a shell on the container: `docker exec -it f5000 sh`


# Server Setup (Python)

Assumes you have python (2.x or 3.x, should work with either) already installed.

1. Create and activate a virtualenv (not completely necessary, but is cleaner 
 than installing into system python library).
   ```
   > virtualenv f5000
   > source f5000/bin/activate
   
   # or, on windows
   > f5000\Scripts\activate
   ```
2. Install flask dependencies.
    ```
    > pip install flask_restful
    ```
3. Run the app (from within this source directory):
    ```
    > python app.py --port 8088 --debug fauxdb.json
    ```
4. Test the connection:
    ```
    > curl localhost:8088
    ```
    
  
# Some examples of API usage with curl


* get a list of categories
    ```
    > curl http://localhost:8088/categories
    ```
    
* get all samples for a category
    ```
    > curl http://localhost:8088/category/fake
    ```
    
* get all samples
    ```
    > curl http://localhost:8088/samples
    ```
    
* get details for a single sample
    ```
    > curl http://localhost:8088/sample/1007
    ```

* update the experiment_name for sample 1007
    ```
    > curl -X PUT -d experiment_name=foobar http://localhost:8088/sample/1007
    ```
    
* delete sample 1007 
    ```
    > curl DELETE http://localhost:8088/sample/1007
    ```

