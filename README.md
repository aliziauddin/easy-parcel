# Easy Parcel
 Basic frontend for easy parcel
 
# Running a React App using Docker

## Prerequisites

- Docker must be installed on your local machine.

## Steps

1. Clone the repository containing the above React app to your local machine:

`git clone https://github.com/aliziauddin/easy-parcel.git`

2. Navigate to the project directory

3. Build the Docker image using the following command, replacing `<image-name>` with your desired image name:

`docker build -t <image-name> .`


4. Run the Docker container using the following command, replacing `<container-name>` with your desired container name and `<port-number>` with your desired port number:

`docker run -p <port-number>:3000 --name <container-name> <image-name>`


5. Open your browser and navigate to `http://localhost:<port-number>` to view the running React app.

## Conclusion

With these steps, you should be able to run your React app using Docker. Enjoy!


 
<img width="1439" alt="Screenshot 2023-02-06 at 9 54 36 PM" src="https://user-images.githubusercontent.com/51478408/217034382-b640b937-ce18-42c4-9f65-1aa232487b5d.png">


To learn more about this project and its development process, check out the following article on Medium:

[Link](https://medium.com/@alighafoorjan/running-a-react-app-with-docker-and-nginx-68a6738b80a7)

