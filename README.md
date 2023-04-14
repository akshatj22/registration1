# **How to start the app?**

**Download or Clone the repository .**
**(All files should be in the same folder)**

# **•	Start Frontend:**
**In the terminal of your code editor; write:**
## **`cd Frontend`**
**This will move us into the the frontend directory. Now write:**
## **`npm start`**
**This command will start the frontend part.**





# **•	Start Backend:**
**In another terminal of your editor; write:**
## **`cd Backend`**
**This will take us into the backend directory. Now write:**
## **`npm run dev`**
**This command will start the backend part of the application.**




# **How to use the app?**
**The frontend starts with a registration form appearing on the screen, where the left side of the form contains fields where the user is required to fill certain details such as first name, last name, email and then checking a check box for the terms and conditions.**

![image](https://user-images.githubusercontent.com/96528441/231967647-ce265606-c167-4d41-921b-ea634e0a9b9a.png)


**All these are necessary and validated fields, without filling this in the correct format , the user wont be able to proceed further.**

![image](https://user-images.githubusercontent.com/96528441/231967738-2e4f78c6-6b20-4534-b9df-f2175a9a0819.png)

![image](https://user-images.githubusercontent.com/96528441/231967765-b9aaf67f-a2dd-4479-ad9b-dce94c5502e3.png)


![image](https://user-images.githubusercontent.com/96528441/231967787-02d0ab93-7259-4e26-8672-a786d24c8731.png)

**On the right side, there is an upload image button which remains disabled until a photo is chosen. On clicking the icon in the box, the user will be able to choose a photo from the system and after clicking on upload image, the photo will be saved in the server, and there will appear an alert pop-up saying that your image has been uploaded. Once the image is uploaded, the upload image buttons get disabled again.**


![image](https://user-images.githubusercontent.com/96528441/231967914-bc2c5a04-0b8f-4c3d-9dac-63288428d2df.png)


**After all the details are filled and photo is uploaded, on clicking the Sign Up button, the user will be redirected to a new page for cropping the image.**

**Here, after selecting the image, the image will appear on the screen and on bringing the cursor on it, it will change to a plus sign, which is used to crop the image. After cropping the image and clicking on crop image button, a preview will be seen, which if not satisfactory and correct, the image can be cropped again any number of times.**


![image](https://user-images.githubusercontent.com/96528441/231968005-0b189dea-db3f-4b9d-b018-32f4e969d63b.png)


**Once the image is cropped correctly, the user has to save the image by clicking on the save button which will save the image to the server. After saving, a pop up appears saying image saved.**

![image](https://user-images.githubusercontent.com/96528441/231968053-aa80e9fe-6bc6-4778-884d-7e816a5ed305.png)


**As for the backend part the uploaded and cropped images are saved into respective folders by the name Cropped-image and Uploads.**



# **Problems faced**

- **Use of react-image-crop library.** 
* **Creating server and using it.**
+ **Integrating frontend to the backend.**
- **Enabling validation for the upload image on the main screen, that is, form can be submitted even without uploading the image.**
* **The image on the sign up should be directly sent to the cropping window so that we do not have to choose it manually.**

# **Problems Solved**


- **React-image-crop.**
* **Creating and running server.**
+ **Integrating frontend to the backend.**


# **My Experience**

**It was a very challenging and insightful experience for me as it was my first time using react-image-crop library, and, the backend part was quite tedious and time taking. Before this, I had done projects mostly in groups, so it was quite tough for me to overcome challenges by my own, provided the time frame given was limited. The challenges which remain unsolved will require some more time and brainstorming. I have learnt a lot from this assignment and I look forward to doing more such projects in the future, as this is really a part where my interest lies.**

